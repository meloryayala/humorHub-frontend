"use client"

import {useEffect, useState} from "react";
import axios from "axios";
import type {CategoryType} from "@/components/custom/categoryList";

export interface JokeType {
    id: number;
    question: string;
    answer: string;
    categoryId: number;
    category: CategoryType;
}


export  const JokeList = () => {
    const [jokes, setJokes] = useState<JokeType[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const getData = (URL: string) =>  {
        axios.get(URL)
            .then(response => {
                setJokes(response.data);
                setLoading(false);
            }).catch(error => {
            setLoading(false);
            setError(error.message)
        })
    }

    useEffect(() => {
        getData("https://backend.melory.codery.ch/joke")
    }, [])

  return(
      <div className="flex ml-[7%]">
          {error && error}
          {loading && loading}
          {
              jokes.map(joke => (
                  joke.question
              ))
          }
      </div>
  )
};