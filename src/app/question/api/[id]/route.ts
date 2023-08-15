import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: any } }
) {
  const res = await fetch('https://98eead25-4b94-4995-a50e-d962c7f98a34.mock.pstmn.io', {
    next: { revalidate: 60 },
  })
  const data = await res.json()
  const dataById = data.questions.find((p: any) => p.id === parseInt(params.id))

  return NextResponse.json(dataById)
}

// 更新
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  // ...
  return new NextResponse(null, { status: 204 })
}
// 削除
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  // ...
  return new NextResponse(null, { status: 204 })
}
