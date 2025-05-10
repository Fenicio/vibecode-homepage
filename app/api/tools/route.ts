import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/tools
export async function GET(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const tools = await prisma.tools.findUnique({ where: { id: Number(id) } });
  return NextResponse.json(tools);
}

export async function PUT(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const data = await request.json();
  const updated = await prisma.tools.update({ where: { id: Number(id) }, data });
  return NextResponse.json(updated);
} 

export async function DELETE(request: Request, { params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  await prisma.tools.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}