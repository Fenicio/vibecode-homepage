import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireOwnershipOrModerator } from '@/lib/rbac';

// GET /api/success-stories/[id]
export async function GET(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const story = await prisma.success_stories.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(story);
}

// PUT /api/success-stories/[id]
export async function PUT(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and ownership
  const { error, session } = await requireOwnershipOrModerator('success_stories', resourceId);
  if (error) {
    return error;
  }

  const data = await request.json();
  const updated = await prisma.success_stories.update({
    where: { id: resourceId },
    data: {
      ...data,
      updated_at: new Date(),
    }
  });
  return NextResponse.json(updated);
}

// DELETE /api/success-stories/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and ownership
  const { error, session } = await requireOwnershipOrModerator('success_stories', resourceId);
  if (error) {
    return error;
  }

  await prisma.success_stories.delete({ where: { id: resourceId } });
  return NextResponse.json({ success: true });
}
