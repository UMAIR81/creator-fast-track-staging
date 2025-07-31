import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "../../App.css";

const TopUpChart = ({ details }) => {
  const [RequiredData, SetRequiredData] = useState([]);

  useEffect(() => {
    const filteredData = [];

    details.forEach((element) => {
      if (element.type === "Credit Top-Up") {
        let topUpAmount = 0;
        topUpAmount = parseInt(element.amount.replace(/[^0-9-]/g, ""));
        filteredData.push({
          date: element.date,
          topUp: topUpAmount,
        });
      }
    });

    SetRequiredData(filteredData);
  }, [details]);

  return (
    <>
      <div className="flex justify-center flex-col items-center bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 font-heading">
          Credit Top-Up History
        </h2>
        <ResponsiveContainer width="75%" height={250}>
          <LineChart data={RequiredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" tick={{ fill: "#374151", fontSize: 12 }} />
            <YAxis tick={{ fill: "#374151", fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="topUp"
              name="Credit Top Up"
              stroke="#dc2626"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TopUpChart;
