"use client"
import { LeaderBoardType } from '@/app/(user)/leaderboard/page';
import { motion } from 'framer-motion';


const colors: { [key: string]: string } = {
    "1": "bg-red-500",
    "2": "bg-blue-500",
    "3": "bg-green-500",
    "4": "bg-yellow-500",
    "5": "bg-pink-500",
    "6": "bg-purple-500",
    "7": "bg-indigo-500",
    "8": "bg-teal-500",
    "9": "bg-cyan-500",
    "10": "bg-orange-500",
    "11": "bg-gray-500",
    "12": "bg-red-600",
    "13": "bg-blue-600",
    "14": "bg-green-600",
    "15": "bg-yellow-600",
    "16": "bg-pink-600",
    "17": "bg-purple-600",
    "18": "bg-indigo-600",
    "19": "bg-teal-600",
    "20": "bg-cyan-600",
};

const Leaderboard = ({ data }: {
    data: LeaderBoardType[]
}) => {

  return (
      <div className="">       

      <div className="space-y-4 min-h-fit overflow-x-hidden">
        {data?.map((item, index: number) => (
          <motion.div
            key={item?.userId}
            className={`flex items-center justify-between p-4 rounded-lg ${colors[(index + 1).toString()] || "bg-slate-700"}  text-white`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center">
              <span className="text-2xl font-bold mr-4">{index + 1}</span>
              {/* <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" /> */}
              <div>
                <h2 className="text-xl font-bold">{item?.userName}</h2>
                <p className="text-sm">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="text-2xl font-bold">{item?.totalScore}/20</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
