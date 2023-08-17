import { Question } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch('https://98eead25-4b94-4995-a50e-d962c7f98a34.mock.pstmn.io', {
    next: { revalidate: 60 },
  })
  const data = await res.json()
  const questions: Question[] = data.questions
  const questionById = questions.find((p) => p.id === parseInt(params.id))

  return NextResponse.json(questionById)
}

// 更新
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // ...
  return new NextResponse(null, { status: 204 })
}
// 削除
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // ...
  return new NextResponse(null, { status: 204 })
}
