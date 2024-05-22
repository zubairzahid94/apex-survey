"use client";

import { revenueData } from "@/lib/constants";
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={revenueData}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <XAxis dataKey="name" axisLine={false} />
        <Tooltip />
        <Bar
          dataKey="revenue"
          fill="#029FF7"
          barSize={10}
          radius={[5, 5, 5, 5]}
          background
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
