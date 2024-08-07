"use client"
import { FaUserAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Score', value: 0 },
  { name: 'Total', value: 6 },
];

const COLORS = ['#FF8042', '#00C49F'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TestResultChart: React.FC = () => (
  <div className="bg-red-600" style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default function QuizFinish() {
    return (
        <div className="h-screen overflow-x-hidden text-[#0F2830] w-full grid-place-items-center pb-7 grid bg-[#f1f5f8]">
            <div className="container max-w-6xl mt-20 space-y-6  mx-auto">
                <div className=" bg-white p-6 w-full shadow rounded-[10px]">
                    <p className="font-semibold text-[18px]">Example Quiz Testing</p>
                </div>

                <div className=" bg-white pt-6 px-6 pb-8 space-y-3 w-full shadow rounded-[10px]">
                    <small>USER</small>
                    <div className="flex items-center">
                        <FaUserAlt size={"22px"}  color="#0F2830" />
                        <p className="font-semibold text-[22px] ml-3">Ayooluwa Aduwo</p>
                    </div>
                </div>

                <div className="bg-white p-6 space-y-3 w-full shadow rounded-[10px]">
                    <div className="flex items-center">
                        <IoInformationCircle/>
                        <small className="ml-3">TEST INFORMATION</small>
                    </div>

                    <div>

                    </div>
                    
                    <p>
                        <span className="text-green-500 font-semibold text-2xl">Congratulations!</span>  You passed the test.
                    </p>


                    <p>Thank you for taking the Quiz!</p>

                    {/* depending on the user score, this can change */}
                    <div className="w-[30%]">
                         <TestResultChart />
                    </div>
                </div>
             </div>
        </div>
    )
}