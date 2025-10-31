import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all comments (with optional filtering by story_id)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const storyId = searchParams.get("story_id");

    const comments = await prisma.comments.findMany({
      where: storyId ? { story_id: parseInt(storyId) } : undefined,
      include: {
        users: {
          select: {
            id: true,
            name: true,
            avatar: true,
            image: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

// POST - Create a new comment
export async function POST(request: Request) {
  try {
    const { getServerSession } = await import("next-auth");
    const { authOptions } = await import("@/lib/auth-config");
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { content, user_id, story_id } = body;

    if (!content || !user_id || !story_id) {
      return NextResponse.json(
        { error: "content, user_id, and story_id are required" },
        { status: 400 }
      );
    }

    const comment = await prisma.comments.create({
      data: {
        content,
        user_id: parseInt(user_id),
        story_id: parseInt(story_id),
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            avatar: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}
