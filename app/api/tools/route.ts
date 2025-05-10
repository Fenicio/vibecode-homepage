import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/tools
export async function GET() {
  const tools = await prisma.tools.findMany();
  return NextResponse.json(tools);
}

// POST /api/tools
export async function POST(...args: [NextRequest]) {
  const data = await args[0].json();
  const created = await prisma.tools.create({ data });
  return NextResponse.json(created, { status: 201 });
}
