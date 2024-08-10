import { Button, Avatar } from "@nextui-org/react";
import Link from "next/link";

interface DNavProps {
    noOfTests: string
}
export default function DashboardNavigation({ noOfTests}: Readonly<DNavProps>) {
    return (
        <div className="w-full md:w-[calc(100%-320px)] px-6 md:px-0 fixed top-0 flex items-center justify-between py-4 ">
            <h2 className="font-semibold">Your Quizzes({noOfTests})</h2>

            <div className="flex items-center space-x-4">    
                 <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <p className="font-[600] hidden md:block">{"Ayooluwa Aduwo"}</p>
                <Button variant="bordered" color="primary">
                    <Link passHref href="/quiz-info">Create Quiz</Link>
                </Button>
            </div>
         
        </div>
    )
}