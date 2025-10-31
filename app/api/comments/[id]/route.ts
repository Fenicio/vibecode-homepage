import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET single comment
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const comment = await prisma.comments.findUnique({
      where: { id },
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

    if (!comment) {
      return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error fetching comment:", error);
    return NextResponse.json({ error: "Failed to fetch comment" }, { status: 500 });
  }
}

// PUT - Update a comment
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id: idStr } = await params;
    const id = parseInt(idStr);
    const body = await request.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json({ error: "content is required" }, { status: 400 });
    }

    const comment = await prisma.comments.update({
      where: { id },
      data: {
        content,
        updated_at: new Date(),
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

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error updating comment:", error);
    return NextResponse.json({ error: "Failed to update comment" }, { status: 500 });
  }
}

// DELETE a comment
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id: idStr } = await params;
    const id = parseInt(idStr);
    await prisma.comments.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return NextResponse.json({ error: "Failed to delete comment" }, { status: 500 });
  }
}
