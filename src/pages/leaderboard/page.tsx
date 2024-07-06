"use client"
import { LeaderBoardType } from '@/app/(user)/leaderboard/page';
import { motion } from 'framer-motion';


const colors: { [key: string]: string } = {
    "1": "bg-red-500",
    '2': "bg-blue-500",
    "3": "bg-green-500",
    "4": "bg-yellow-500",
    "5": "bg-pink-500"
}
const Leaderboard = ({ data }: {
    data: LeaderBoardType[]
}) => {

  return (
      <div className="">       

      <div className="space-y-4 min-h-fit overflow-x-hidden">
        {data?.map((item, index: number) => (
          <motion.div
            key={item?.userId}
            className={`flex items-center justify-between p-4 rounded-lg ${colors[(index + 1).toString()] || "bg-purple-500"}  text-white`}
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
