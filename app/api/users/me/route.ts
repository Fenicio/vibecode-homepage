import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.users.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        last_name: true,
        bio: true,
        avatar: true,
        image: true,
        experience_level: true,
        created_at: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, first_name, last_name, bio, experience_level } = body;

    const updatedUser = await prisma.users.update({
      where: { email: session.user.email },
      data: {
        name: name || undefined,
        first_name: first_name || null,
        last_name: last_name || null,
        bio: bio || null,
        experience_level: experience_level || null,
        updated_at: new Date(),
      },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        last_name: true,
        bio: true,
        avatar: true,
        image: true,
        experience_level: true,
        updated_at: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
