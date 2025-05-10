import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /api/success-stories
export async function GET() {
  const stories = await prisma.success_stories.findMany();
  return NextResponse.json(stories);
}

// POST /api/success-stories
export async function POST(...args: [NextRequest]) {
  const data = await args[0].json();
  const created = await prisma.success_stories.create({ data });
  return NextResponse.json(created, { status: 201 });
}
