"use client"
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";
import { Audio as AudioPlayer } from './audio-player';
import useQuizStore from "@/store/quiz-store";
import { useState } from "react";
import axios from "axios"
import { useUser, useAuth } from "@clerk/clerk-react";
import { useRouter } from "next/navigation"

type QuizType = {
    number: number;
    question: string;
    audioLink?: string;
    id: number
};


const QuizCard: React.FC<QuizType> = ({ number, question, audioLink, id }) => {

    const { user } = useUser();
    const { userId } = useAuth();
    const [isFormSubmitting, setIsFormSubmitting] = useState(false)

    const router = useRouter()
    const { score, incrementScore, totalQuestionLimit, askedQuestions, nextQuestion,
        addAskedQuestion } = useQuizStore();

    const [userInput, setUserInput] = useState<string>("")

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserInput(value)
    }

    function onAnswerSelect() {
        addAskedQuestion(id)
        if (userInput === "") return;
        if (question?.toLowerCase() === userInput?.toLowerCase()) {
            incrementScore();
            nextQuestion();
            setUserInput("")
            return;
        }
    }

    const submitQuiz = async (event: { preventDefault: () => void; }) => {
        if (event) event.preventDefault();
        setIsFormSubmitting(true)
        try {
            const response = await axios.post("/api/submit-quiz", {
                totalScore: score,
                userName: user?.username,
                userId: userId ?? ""

            })
            router.push("/results")
            return response.data;
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsFormSubmitting(false)
        }
    }

    return (
        <Card className="py-4 shadow-sm w-full md:w-[400px] lg:w-[600px] ">
            <CardHeader className="pb-0 pt-2 px-4 space-y-4 flex-col items-start">
                <p className="text-tiny uppercase font-medium">Question {askedQuestions?.length + 1}</p>
                <h4 className="font-semibold text-md">{askedQuestions?.length + 1 + ". Spell the word in the recording"}</h4>
                <AudioPlayer word={audioLink as string} />
                <hr></hr>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <form onSubmit={submitQuiz} className="w-full space-y-7">
                    <Input
                        key={"outside"}
                        type="text"
                        label="Enter Answer"
                        labelPlacement={"outside"}
                        name="userInput"
                        required
                        onChange={onInputChange}
                        value={userInput}
                    />
                    {
                        askedQuestions?.length + 1 !== totalQuestionLimit ? (
                            <Button color="primary" onClick={onAnswerSelect} variant="shadow" className="w-full">{"Next"}</Button>
                        ) : (
                            <Button isLoading={isFormSubmitting} color="primary" type="submit" variant="shadow" className="w-full">{"Submit"}</Button>
                        )
                    }
                </form>
            </CardBody>
        </Card>
    );
};

export default QuizCard;
