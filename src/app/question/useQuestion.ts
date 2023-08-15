"use client"

import { useState, useEffect } from 'react';

export const useQuestion = (id: number) => {
  const [question, setQuestion] = useState(null);

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

  return { question };
};
