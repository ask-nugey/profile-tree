"use client"

import { useRouter } from 'next/navigation';
import { useQuestionnaire } from '@/app/question/useQuestionnaire';
import { useQuestion } from '@/app/question/useQuestion';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { currentIndex, answers, goToNextQuestion, isComplete } = useQuestionnaire();
  const { question } = useQuestion(currentIndex);

  useEffect(() => {
    if (isComplete) {
      router.push('/profile');
    }
  }, [isComplete, router]);

  const handleChoiceClick = (result: string) => {
    goToNextQuestion(result);
  };

  return (
    <main>
      <div className='c-block'>
        <h1 className='c-questionTitle'>
          {question?.content}
        </h1>

        <div className='c-questionList'>
          {question?.choices.map((choice, index) => (
            <button
              className='c-questioItem'
              key={index}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
