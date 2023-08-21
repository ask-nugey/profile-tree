"use client";

import Ansers from "@/app/profile/Ansers";
import useRetrieveAnswers from "@/app/profile/useRetrieveAnswers";
import { Question } from "@/types";
import { useState } from "react";

export default function Page() {
  const answers = useRetrieveAnswers();
  const [questions, setQuestions] = useState<Question[] | null>(null);

  return (
    <main>
      <div className="c-block">
        <h1 className="c-answerTitle">あなたのプロフィール</h1>
        <Ansers
          answers={answers}
          questions={questions}
          setQuestions={setQuestions}
        />
      </div>
    </main>
  );
}
