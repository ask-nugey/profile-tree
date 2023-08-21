"use client"

import { Question } from '@/types';
import { useState, useEffect } from 'react';

export const useQuestion = (id: number) => {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const getData = async (id: number) => {
      const res = await fetch(`/question/api/${id}`, {
        next: { revalidate: 60 },
      })
      const data = await res.json()

      setQuestion(data);
    }

    getData(id)
  }, [id]);

  console.log(question);

  return { question };
};
