import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
