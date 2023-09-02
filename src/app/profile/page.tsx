import Ansers from "@/app/profile/Ansers";
import { Answer, Question } from "@/types";

export default async function Page() {
  const res = await fetch("https://profile-tree-beige.vercel.app/question/api");
  const questions: Question[] = await res.json();

  return (
    <main>
      <div className="c-block">
        <h1 className="c-answerTitle">あなたのプロフィール</h1>
        <Ansers
          questions={questions}
        />
      </div>
    </main>
  );
}
