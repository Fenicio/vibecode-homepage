import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

// GET /api/glossary
export async function GET() {
  const glossary = await prisma.glossary.findMany();
  return NextResponse.json(glossary);
}

// POST /api/glossary
export async function POST(...args: [NextRequest]) {
  const auth = await requireAuth();
  if (!auth.authenticated) {
    return auth.response;
  }

  const data = await args[0].json();
  const created = await prisma.glossary.create({ data });
  return NextResponse.json(created, { status: 201 });
}
