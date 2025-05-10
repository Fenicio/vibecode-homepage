import {  NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/glossary/[id]
export async function GET(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const item = await prisma.glossary.findUnique({ where: { id: Number(id) } });
  if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(item);
}

// PUT /api/glossary/[id]
export async function PUT(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const data = await request.json();
  const updated = await prisma.glossary.update({ where: { id: Number(id) }, data });
  return NextResponse.json(updated);
}

// DELETE /api/glossary/[id]
export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  await prisma.glossary.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}
