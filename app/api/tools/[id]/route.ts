import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/tools/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const item = await prisma.tools.findUnique({ where: { id: Number(id) } });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

// PUT /api/tools/[id]
export async function PUT(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const data = await req.json();
  const updated = await prisma.tools.update({ where: { id: Number(id) }, data });
  return NextResponse.json(updated);
}

// DELETE /api/tools/[id]
export async function DELETE(req: NextRequest, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  await prisma.tools.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}
