import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/success-stories
export async function GET() {
  const stories = await prisma.success_stories.findMany();
  return NextResponse.json(stories);
}

// POST /api/success-stories
export async function POST(request: Request) {
  const data = await request.json();
  const created = await prisma.success_stories.create({ data });
  return NextResponse.json(created, { status: 201 });
}
