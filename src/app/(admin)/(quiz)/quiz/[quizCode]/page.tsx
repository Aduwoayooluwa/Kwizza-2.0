import { Sidebar } from "@/layout/sidebar";
import QuizQuestion from "@/page/quiz/Quiz";

export default function Page({ params }: Readonly<{ params: { quizCode: string } }>) {

    const { quizCode } = params;

    return(
    <Sidebar>
        <div className="user-board">
                <h2 className="font-semibold text-xl">{ quizCode +"' Quiz" } </h2>
            <div className="w-full h-full mt-10 md:p-0">
                <QuizQuestion />
            </div>
        </div>
    </Sidebar>
    )

}