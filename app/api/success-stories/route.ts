import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

// GET /api/success-stories
export async function GET() {
  const stories = await prisma.success_stories.findMany();
  return NextResponse.json(stories);
}

// POST /api/success-stories
export async function POST(request: Request) {
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return auth.response;
  }

  const data = await request.json();
  const created = await prisma.success_stories.create({ data });
  return NextResponse.json(created, { status: 201 });
}
