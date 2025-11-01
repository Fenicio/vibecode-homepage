import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireOwnershipOrModerator } from '@/lib/rbac';

// GET /api/tools/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const item = await prisma.tools.findUnique({ where: { id: Number(id) } });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

// PUT /api/tools/[id] - Requires MODERATOR role
export async function PUT(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and moderator role (tools have no user_id, so only moderators can edit)
  const { error, session } = await requireOwnershipOrModerator('tools', resourceId);
  if (error) {
    return error;
  }

  const data = await req.json();
  const updated = await prisma.tools.update({
    where: { id: resourceId },
    data: {
      ...data,
      updated_at: new Date(),
    }
  });
  return NextResponse.json(updated);
}

// DELETE /api/tools/[id] - Requires MODERATOR role
export async function DELETE(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const resourceId = Number(id);

  // Check authentication and moderator role (tools have no user_id, so only moderators can delete)
  const { error, session } = await requireOwnershipOrModerator('tools', resourceId);
  if (error) {
    return error;
  }

  await prisma.tools.delete({ where: { id: resourceId } });
  return NextResponse.json({ success: true });
}
