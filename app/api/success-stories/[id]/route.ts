import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/success-stories/[id]
export async function GET(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const story = await prisma.success_stories.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(story);
}

// PUT /api/success-stories/[id]
export async function PUT(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const data = await request.json();
  const updated = await prisma.success_stories.update({ where: { id: Number(id) }, data });
  return NextResponse.json(updated);
}

// DELETE /api/success-stories/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  await prisma.success_stories.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}
