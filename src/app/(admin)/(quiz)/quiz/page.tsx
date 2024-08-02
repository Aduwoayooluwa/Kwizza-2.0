"use client"
import { Sidebar } from "@/layout/sidebar";
import JoinQuiz from "@/page/quiz/join-quiz";
import { useUser } from '@clerk/nextjs';
export default function Quiz() {
    const { user } = useUser()
    return <Sidebar>
       <JoinQuiz userName={user?.username!} />
    </Sidebar>
}