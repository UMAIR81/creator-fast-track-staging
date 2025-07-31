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

const PurchaseChart = ({ details }) => {
  const [RequiredData, SetRequiredData] = useState([]);

  useEffect(() => {
    const filteredData = [];

    details.forEach((element) => {
      if (element.type === "Purchase") {
        let purchaseAmount = 0;
        purchaseAmount = parseInt(element.amount.replace(/[^0-9-]/g, ""));
        filteredData.push({
          date: element.date,
          purchase: purchaseAmount,
        });
      }
    });

    SetRequiredData(filteredData);
  }, [details]);

  return (
    <>
      <div className="flex justify-center flex-col items-center bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 font-heading">
          Purchase History
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
              dataKey="purchase"
              name="Purchase"
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

export default PurchaseChart;
