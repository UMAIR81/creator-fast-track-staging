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

const AllCharts = ({ details }) => {
  const [RequiredData, SetRequiredData] = useState([]);

  useEffect(() => {
    const filteredData = [];

    details.forEach((element) => {
      let purchaseAmount = 0;
      let CreditTopUp = 0;
      let RaffleWin = 0;

      if (element.type === "Purchase") {
        purchaseAmount = parseInt(element.amount.replace(/[^0-9-]/g, ""));
      } else if (element.type === "Credit Top-Up") {
        CreditTopUp = parseInt(element.amount.replace(/[^0-9]/g, ""));
      } else if (element.type === "Raffle Win") {
        const num = parseInt(element.amount.replace(/[^0-9]/g, ""));
        RaffleWin = isNaN(num) ? 0 : num;
      }

      filteredData.push({
        date: element.date,
        topUp: CreditTopUp,
        purchase: purchaseAmount,
        raffle: RaffleWin,
      });
    });

    SetRequiredData(filteredData);
  }, [details]);

  return (
    <div className="flex justify-center flex-col items-center bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 font-heading">
        Transaction History
      </h2>
      <ResponsiveContainer width="75%" height={250} className="bg-white">
        <LineChart data={RequiredData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fill: "#374151", fontSize: 12 }} />
          <YAxis tick={{ fill: "#374151", fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="topUp"
            name="Credit Top-Up"
            stroke="#16a34a" 
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="purchase"
            name="Purchase"
            stroke="#dc2626"  
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="raffle"
            name="Raffle Wins"
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AllCharts;
