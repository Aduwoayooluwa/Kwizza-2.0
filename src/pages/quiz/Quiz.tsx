"use client"
import { prisma } from "@/utils/global"
import { audioFiles } from "@/utils/questions";
import QuizCard from "@/components/quiz";
import useQuizStore from "@/store/quiz-store";
import { ClerkProvider } from "@clerk/nextjs";

function generateRandomQuestionNumbers(){
    return Math.floor(Math.random() * 100) || 20; 
}

console.log(generateRandomQuestionNumbers())

export default function QuizQuestion() {

    const { currentQuestionIndex } = useQuizStore();
    const question = audioFiles.find((question) => question.id === generateRandomQuestionNumbers() ?? 37) || audioFiles[99];

    return(
        <div>
            <QuizCard 
                number={currentQuestionIndex + 1}
                question={question?.word as string}
                audioLink={question?.link as string}
                id={question?.id as number}
            />
        </div>
    )
} 