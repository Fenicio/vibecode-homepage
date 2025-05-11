import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/glossary
export async function GET() {
  const glossary = await prisma.glossary.findMany();
  return NextResponse.json(glossary);
}

// POST /api/glossary
export async function POST(...args: [NextRequest]) {
  const data = await args[0].json();
  const created = await prisma.glossary.create({ data });
  return NextResponse.json(created, { status: 201 });
}
