import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

// GET /api/tools
export async function GET() {
  const tools = await prisma.tools.findMany();
  return NextResponse.json(tools);
}

// POST /api/tools
export async function POST(request: Request) {
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return auth.response;
  }

  const data = await request.json();
  const created = await prisma.tools.create({ data });
  return NextResponse.json(created, { status: 201 });
}
