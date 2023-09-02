import { questions } from '@/data/questions';
import { Question } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    "https://cb7980ab-942a-4a59-9c7e-19afd71184ac.mock.pstmn.io/questions"
  );
  const data: Question[] = await res.json();
  // const data: Question[] = questions
  const dataById = data.find((p) => p.id === parseInt(params.id));

  return NextResponse.json(dataById)
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
