"use client"
import { Button } from "@nextui-org/react";
import { useState } from "react";
import Question, { QuestionProps } from "./question";

const dummyQuestionData: Omit<QuestionProps, "setSelectedAnswer"> = {
    question: "What is your favorite programming language?",
    answers: ["JavaScript", "Python", "TypeScript", "Go"],
    type: "single_choice",
};

export interface SetAnswerProps {
    question_id: string,
    answer: string
}

export default function InProgress() {
    const [selectedAnswer, setSelectedAnswer] = useState<SetAnswerProps>({
        question_id: "", 
        answer: ""
    })
    const questionNumber = 1;

    const onSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();

        // write the actual server function to call the question and generate next question.
        return selectedAnswer;
    }
   
    return (
        <div className="h-screen overflow-x-hidden text-[#0F2830] w-full grid-place-items-center pb-7 grid bg-[#f1f5f8]">
            <div className="container max-w-3xl my-auto mx-auto">
                
            <form className="bg-white h-fit space-y-6   shadow p-6 rounded-[10px]" onSubmit={onSubmit}>
                    <p className="text-sm">Question {questionNumber}</p>
                    
                <Question {...dummyQuestionData}  setSelectedAnswer={setSelectedAnswer} />    

                <Button type="submit" color="primary" className="w-full">{"Next"}</Button>
            </form>
            </div>
        </div>

    )
}