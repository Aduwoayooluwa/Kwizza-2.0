"use client"

import { useUser } from "@clerk/nextjs"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Userillustr from "@/assets/svgs/user_dashb.svg"
import { PieChartComponent } from "@/components/pie-chart";
import { FaRegLifeRing, FaBookOpen } from 'react-icons/fa';


const data = [
  { name: 'Correct', value: 400 },
  { name: 'Incorrect', value: 300 },
  { name: 'Skipped', value: 300 },
  { name: 'Total', value: 1000 },
];

interface StatCardProps {
  completedQuizzes: number;
}

const StatCard: React.FC<StatCardProps> = ({ completedQuizzes }) => {
  return (
    <div className="bg-white h-[250px] w-[250px] p-4 grid place-items-center shadow-sm rounded-[12px]">
           <p className="text-start font-semibold text-xl">Completed Quizzes</p>
            <PieChartComponent total={completedQuizzes} data={data} />
    </div>
  );
};

const InfoCard: React.FC = () => {
  return (
    <div className="bg-white shadow-sm w-[400px] h-[250px] rounded-lg p-6 flex items-start">
      <div className="flex-shrink-0">
        <FaRegLifeRing className="h-12 w-12 text-blue-500" />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">Need Help?</h2>
        <p className="mt-2 text-gray-600">
          If you have any issues or need assistance, please don&apos;t hesitate to contact our support team.
        </p>
        <div className="mt-4">
          <a href="mailto:support@example.com" className="text-blue-500 hover:underline">
            Email Support
          </a>
        </div>
        <div className="mt-2">
          <a href="/report-issue" className="text-blue-500 hover:underline">
            Report an Issue
          </a>
        </div>
      </div>
    </div>
  );
};

const Quizzes = () => {
    return (
      <div className="shadoow-sm w-[300px] grid place-items-center bg-white rounded-[12px] h-[250px]">
        <div className="flex items-center space-x-5">
          <FaBookOpen /> 
          <p className="font-semibold text-center text-xl">No History</p>
        </div>
        </div>
    )
}
export default function Dashboard() {
    const { user } = useUser();
    return (
        <div className=" space-y-8 w-full ">
            {/* recent quiz taken */}
            <div className="w-full rounded-[24px] flex justify-around items-center p-8 overflow-hidden bg-gradient-to-r from-blue-100 to-blue-300 h-[250px] shadow-sm">
                {/* greetings banner div */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-3xl dashboard">Welcome back, <span className="bg-blue-500 text-white p-1 rounded">{user?.firstName}</span></h2>
                    <div>
                        <p className="text-sm w-[80%] user-board">Get ready to enhance your learning with fun audio-based quizzes. Create, share, or join quizzes in just a few clicks!</p>
                        {/* <p className="text-sm">Explore new quizzes or revisit your favorite ones to test your knowledge and improve your listening skills.</p> */}
                    </div>

                    <div className="space-x-4 dashboard mt-10">
                        <Button color="primary">Create a Quiz</Button>
                        <Button color="primary">Join a Quiz</Button>
                    </div>

                </div>
                <Image src={Userillustr} alt="user gif" width={350} height={250} />
            </div>

            {/* total quiz taken like stat */}
        
            <div className="flex items-start justify-between user-board space-x-4">
                <StatCard completedQuizzes={15} />
          
          <Quizzes />
          <InfoCard />
            </div>
    


        </div>
    )
}

