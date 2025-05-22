// app/api/clientes/route.ts
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()
  const novo = await prisma.cliente.create({ data })
  return NextResponse.json(novo)
}

export async function GET() {
  const clientes = await prisma.cliente.findMany()
  return NextResponse.json(clientes)
}
