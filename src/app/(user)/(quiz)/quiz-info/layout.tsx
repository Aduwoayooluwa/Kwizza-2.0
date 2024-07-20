"use client"

import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiSettings, FiHelpCircle, FiLock, FiHome, FiFileText, FiClock, FiAward  } from 'react-icons/fi';
import { FaPlay } from "react-icons/fa";
import { Sidebar } from "@/layout/sidebar";
import { Button, Progress } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export const RouteTitleMatch:Record<string, string> = {
    "/quiz-info/duration-settings": "Time and Duration",
    "/quiz-info": "Setup Options",
    "/quiz-info/grading-info": "Grading Info",
    "/quiz-info/questions-bank": "Questions Bank",
    "/quiz-info/quiz-configuration": "Quiz Configuration & Access",
}

interface RenderListProps {
    href: string;
    icon: IconType;
    text: string;
}

const RenderList: React.FC<RenderListProps> = ({ href, icon: Icon, text }) => {
    return (
        <li>
            <Link href={href} passHref>
                <div className="flex items-center px-2 py-4 hover:bg-gray-200 rounded-md ">
                    <Icon className="h-6 w-6 mr-3 text-gray-600" />
                    <span className="text-gray-800 text-[15px]">{text}</span>
                </div>
            </Link>
        </li>
    );
};

export default function QuizInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const tagName = "setup in progress";

    const titleName: string = usePathname();


  return (
      <Sidebar>
          {/*  put tjhe navigation bar on these layout pages on the folder, since they cannot be accessed unless logged in.  */}
            <div>
                {/* header */}
                <div className="flex w-full items-center mb-6 -mt-2">
                    <div className="w-80">
                        <div className={`border w-fit grid place-items-center px-3 py-1 font-semibold rounded-[10px] text-center text-xs h-[30px] ${tagName.toLowerCase() === "closed" ? "text-[#BE3232]  border-[#BE3232]" : tagName.toLowerCase() === "setup in progress" ? "text-purple-500 border-purple-500" : ""}`}>{tagName.toUpperCase()}</div>
                    </div>

                  <div>
                      <h2 className='font-semibold text-lg md:text-xl'>{ RouteTitleMatch[titleName] }</h2>
                  </div>
                </div>

                {/* body */}
                <div className="flex items-start">
                    <div className='pr-8'>
                        {/* left bar */}

                      <div className="mb-4 flex items-center space-x-3">
                          <p className='text-[15px] text-nowrap'>{"50% "} completed</p>
                            <Progress size='sm' value={50} aria-label="Loading..." />
                            
                        </div>
                        <h2 className="font-semibold text-lg md:text-xl ">Settings</h2>

                        <div className="w-72 h-fit bg-gray-100 py-5">
                            <ul className="space-y-2 ">
                                <RenderList href="/quiz-info" icon={FiSettings} text="Setup Options" />
                                <RenderList href="/quiz-info/questions-bank" icon={FiHelpCircle} text="Questions Bank" />
                                <RenderList href="/quiz-info/quiz-configuration" icon={FiLock} text="Quiz Configuration & Access" />
                                {/* <RenderList href="/quiz-info/quiz-access" icon={FiLock} text="Access" /> */}
                                {/* <RenderList href="/quiz-info/test-start" icon={FiHome} text="Test start page" /> */}
                                <RenderList href="/quiz-info/grading-info" icon={FiFileText} text="Grading & Information" />
                                <RenderList href="/quiz-info/duration-settings" icon={FiClock} text="Time and Duration" />
                                {/* <RenderList href="/quiz-info/certificate-template" icon={FiAward} text="Certificate template" /> */}
                            </ul>
                        </div>

                        <Button color="primary" className="w-full font-semibold relative">
                            <FaPlay className="absolute left-6" />
                            <p>Activate Quiz</p>
                        </Button>

                        <div className="bg-gray-300 mt-6 h-[1px] w-full"></div>
                    </div>

                    <div className='w-[calc(100%-20rem)]'>
                        {/* other bar */}
                        {children}
                    </div>
                </div>
            </div>
        </Sidebar>
  );
}

