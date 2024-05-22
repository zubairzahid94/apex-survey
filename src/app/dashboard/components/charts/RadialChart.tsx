"use client";

import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const RadialChart = ({ name, data }: { name: string; data: number }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="80%"
        outerRadius="100%"
        barSize={20}
        data={[{ name, value: data }]}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar dataKey="value" fill="#8884d8" />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialChart;
