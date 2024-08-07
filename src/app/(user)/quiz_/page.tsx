"use client"
import { GrSecure } from "react-icons/gr";
import { Input, Button } from "@nextui-org/react";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
export default function StartQuiz() {

    const [userDetails, setUserDetails] = useState({
        first_name: "",
        last_name: "",
    })

    function onUserDetailsFill(e: ChangeEvent<HTMLInputElement>) {
        if (e) e.preventDefault();
        const { name, value } = e.target;
        setUserDetails({...userDetails, [name]: value })
    }

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        if (e) e.preventDefault();
        return userDetails;
    }
    return (
        <div className="h-screen overflow-x-hidden text-[#0F2830] w-full grid-place-items-center pb-7 grid bg-[#f1f5f8] ">
            <div className="container max-w-6xl mt-20 space-y-6  mx-auto">
                <div className=" bg-white p-6 w-full shadow rounded-[10px]">
                    <p className="font-semibold text-[18px]">Example Quiz Testing</p>
                </div>

                <div className="w-full bg-white shadow p-6 rounded-[10px]">
                    <p className="font-[600] text-[12px]">INSTRUCTIONS</p>

                    <article className="whitespace-pre-line">
                        {`
                            Hello!\n            
                            This test consists of 6 questions. The time to solve one question is 2 minutes.\n
                            Make sure you have enough time and then start the test.\n\n
                           Good luck!
                        `}
                    </article>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <article className="bg-white space-y-3 w-full p-6 rounded-[10px] shadow">
                        <div className="flex items-center">
                            <GrSecure color="#2570eb" />
                            <p className={"font-[600] ml-2 text-[12px]"}>SECURE QUIZ</p>
                        </div>
                        <div className="whitespace-pre-line">
                            {
                            `
                            Kindly Focus on your test only!\n
                            To ensure the integrity of your test, we recommend disabling background programs, chats, and system notifications, as they can trigger a test block. Please focus solely on the test.\n
                            Looking up answers or switching tabs during the test is strictly prohibited and will be monitored. Violations may result in disqualification.
                            `
                        }
                        </div>
                    </article>

                    <form onSubmit={onSubmit} className="bg-white space-y-4 w-full p-6 rounded-[10px] shadow">
                        <span className="whitespace-pre-line">
                            <p className={"font-[600] ml-2 text-[12px]"}>Start the Quiz</p>
                           <div>
                            {`
                            Fill in your details to start the quiz.
                            `}
                            </div>
                        </span>
                        <Input onChange={onUserDetailsFill} required label="First Name" variant="bordered" name="first_name" />

                        <Input onChange={onUserDetailsFill} required label="Last Name" variant="bordered" name="first_name" />

                        <Button type="submit" color="primary">Start Quiz</Button>
                    </form>

                    <span className="font-[600] text-[14px]">
                        Secured by {"  "} <Link href={"/"} className={"text-xl font-semibold"} target="_blank" rel="noreferrer">KWIZZA</Link>
                    </span>
                </div>

                
            </div>
        </div>
    )
}