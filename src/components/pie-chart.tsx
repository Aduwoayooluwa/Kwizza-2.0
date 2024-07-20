import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Label, LabelList } from 'recharts';

interface PieChartComponentProps {
    data: { name: string; value: number }[];
    total?: number; 
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const PieChartComponent: React.FC<PieChartComponentProps> = ({ data , total }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx={80}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          animationBegin={0}
          animationDuration={800}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={`${total}`}
            position="center"
            style={{ fill: 'black', fontSize: '38px', fontWeight: 'bold'}}
          />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};


