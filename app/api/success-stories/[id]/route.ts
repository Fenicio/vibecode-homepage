import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/success-stories/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const item = await prisma.success_stories.findUnique({ where: { id: Number(params.id) } });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

// PUT /api/success-stories/[id]
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const updated = await prisma.success_stories.update({ where: { id: Number(params.id) }, data });
  return NextResponse.json(updated);
}

// DELETE /api/success-stories/[id]
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.success_stories.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ success: true });
}
