import QuizQuestion  from "@/page/quiz/Quiz;

// export const submitQuiz = async () => {
    // "use server"
    // const userInput = await prisma.
// }

export default function Quiz() {
    return <div className="w-full h-screen bg-gray-100 grid place-items-center p-6 md:p-0">
        <QuizQuestion />
    </div>
}