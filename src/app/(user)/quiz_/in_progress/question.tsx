"use client"

import { Checkbox, Textarea, Radio, RadioGroup } from "@nextui-org/react";
import type { SetAnswerProps } from "./page";

export interface QuestionProps {
    question: string;
    answers: string[]
    type: "short_answer" | "single_choice" | "multiple_choice",
    setSelectedAnswer: React.Dispatch<React.SetStateAction<SetAnswerProps>>
}
export default function Question(props: Readonly<QuestionProps>) {
    const { question, answers, type, setSelectedAnswer } = props; 

    const handleSelectQuestion = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        //  come back and set the ID from here....
        setSelectedAnswer({ question_id: "", answer: value })
    }
    return (
        <div className="space-y-6">
            {/* question */}
            <section>
                <p className="text-[18px] font-[600]">{ question }</p>
            </section>

            {/* answers */}
            <section>
                {/* answers will be of 3 types for now. 
                1. Short text answer,
                2. Checkbox answer. -> allow users to pick more than one answer.
                3. Radio input -> uer pick only one answer
                4. Long answer -> sill withing single answer 
                */}
                
                {
                    type === "multiple_choice" ? answers.map((answer) => (
                        <div key={answer} className="flex space-x-3 my-2">
                            <Checkbox  onChange={handleSelectQuestion} />
                            <p>{  answer }</p>
                        </div>
                    )) : null
                }

                {
                    type === "single_choice" ?
                        <RadioGroup>
                            {answers.map((answer) => (
                            <Radio className="" onChange={handleSelectQuestion} value={answer} key={answer}>
                                {answer}
                            </Radio>
                     ))}
                        </RadioGroup>
                         : null
                }

                {
                    type === "short_answer" ?  
                        <Textarea color="primary" onChange={handleSelectQuestion} variant="bordered" minRows={3} /> 
                    : null
                }

            </section>
        </div>
    )
}