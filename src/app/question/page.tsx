import { Main } from "@/app/question/Main";
import { Question } from "@/types";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: { index: number };
}) {
  const res = await fetch("http://localhost:3000/question/api");
  const questions: Question[] = await res.json();
  const index = Number(searchParams.index);
  const limit = 5; //質問の数

  return (
    <main>
      <div className="c-block">
        {index >= 0 && index <= limit ? (
          <>
            <h1 className="c-questionTitle">{questions[index].content}</h1>
            <Main questions={questions} index={index} limit={limit} />
          </>
        ) : (
          <Link href="?index=0" className="c-btn">
            質問に答える
          </Link>
        )}
      </div>
    </main>
  );
}
