import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://98eead25-4b94-4995-a50e-d962c7f98a34.mock.pstmn.io', {
    next: { revalidate: 60 },
  })
  const data = await res.json()

  return NextResponse.json(data)
}
