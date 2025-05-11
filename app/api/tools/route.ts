import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/tools
export async function GET() {
  const tools = await prisma.tools.findMany();
  return NextResponse.json(tools);
}

// POST /api/tools
export async function POST(request: Request) {
  const data = await request.json();
  const created = await prisma.tools.create({ data });
  return NextResponse.json(created, { status: 201 });
}
