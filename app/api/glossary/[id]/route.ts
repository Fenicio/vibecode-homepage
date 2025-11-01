import {  NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireOwnershipOrModerator } from '@/lib/rbac';

// GET /api/glossary/[id]
export async function GET(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const item = await prisma.glossary.findUnique({ where: { id: Number(id) } });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

// PUT /api/glossary/[id] - Requires MODERATOR role
export async function PUT(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and moderator role (glossary has no user_id, so only moderators can edit)
  const { error } = await requireOwnershipOrModerator('glossary', resourceId);
  if (error) {
    return error;
  }

  const data = await request.json();
  const updated = await prisma.glossary.update({
    where: { id: resourceId },
    data: {
      ...data,
      updated_at: new Date(),
    }
  });
  return NextResponse.json(updated);
}

// DELETE /api/glossary/[id] - Requires MODERATOR role
export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and moderator role (glossary has no user_id, so only moderators can delete)
  const { error } = await requireOwnershipOrModerator('glossary', resourceId);
  if (error) {
    return error;
  }

  await prisma.glossary.delete({ where: { id: resourceId } });
  return NextResponse.json({ success: true });
}
