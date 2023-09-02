import { questions } from '@/data/questions';
import { Question } from '@/types'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(
    "https://cb7980ab-942a-4a59-9c7e-19afd71184ac.mock.pstmn.io/questions"
  );
  // const data: Question[] = await res.json()
  const data: Question[] = questions

  return NextResponse.json(data);
}
