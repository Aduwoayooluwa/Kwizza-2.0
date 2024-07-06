"use client"

import useQuizStore from "@/store/quiz-store"
import { Button } from "@nextui-org/react";
import Link from "next/link"

const Page = () => {
    const { score } = useQuizStore();
    const scorePercentage = (score / 20) * 100

    if (score < 10) {
        return (
            <div className="h-screen w-full grid place-items-center p-6">
                <div className="shadow space-y-6 rounded w-full md:w-[400px] lg:w-[600px] bg-gray-200 p-6">
                    <h2 className="text-red-500 font-bold text-xl">Sorry!</h2>
                    <p className="text-lg">You did not reach the pass mark!</p>
                    <p className="text-md">Your Score: <span className="font-bold">{score}</span> / 20</p>
                    <p className="text-md">Percentage: <span className="font-bold">{scorePercentage.toFixed(2)}</span></p>
                    <p className="text-md">Thank you for participating in our quiz. We hope you enjoyed it and learned something new!</p>
                    <div className="w-full grid place-items-center">
                         <Button color="primary">
                        <Link href="/leaderboard" passHref>
                            View your Position
                        </Link>
                    </Button>
                    </div>
                </div >
            </div >
        )
    }

    return (
        <div className="h-screen w-full grid place-items-center p-6">
            <div className="shadow space-y-6 rounded w-full md:w-[400px] lg:w-[600px] bg-gray-200 p-6">

                <h2 className="text-green-500 font-bold text-xl">Congratulations!</h2>
                <p className="text-lg">You passed the test with flying colors! 🎉</p>
                <p className="text-md">Your Score: <span className="font-bold">{score}</span> / 20</p>
                <p className="text-md">Percentage: <span className="font-bold">{scorePercentage.toFixed(2)}%</span></p>
                <p className="text-md">Keep up the great work and continue to challenge yourself to improve even further.</p>
                <p className="text-md">Thank you for participating in our quiz. We hope you enjoyed it and learned something new!</p>
                <p className="text-md">Stay tuned for more exciting quizzes and learning opportunities.</p>

                <div className="w-full grid place-items-center">
                    <Button color="primary">
                        <Link href="/leaderboard" passHref>
                            View your Position
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page