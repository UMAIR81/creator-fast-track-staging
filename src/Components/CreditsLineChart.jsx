import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../App.css";

const data = [
  { date: "2025-06-14", credits: 1500 },
  { date: "2025-06-16", credits: 800 },
  { date: "2025-06-18", credits: 1200 },
  { date: "2025-06-20", credits: 750 },
  { date: "2025-06-21", credits: 500 },
  { date: "2025-06-22", credits: 1000 }
];

const CreditsLineChart = () => (
  <div className="w-full h-64 p-10 pt-4">
    <h2 className="text-lg font-semibold mb-3 text-gray-700 font-heading">Top-Up Trend</h2>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="credits" stroke="#14b8a6" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CreditsLineChart;