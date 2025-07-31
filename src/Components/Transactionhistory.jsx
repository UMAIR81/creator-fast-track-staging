import React, { use, useEffect, useState } from "react";
import RaffleWinChart from "./Charts/RaffleWinChart";
import PurchaseChart from "./Charts/PurchaseChart";
import AllCharts from "./Charts/AllCharts";
import TopUpChart from "./Charts/TopUpChart";
import Spinner from "./Spinner";
import "../App.css";

const Transactionhistory = ({ currentTab, setCurrentTab }) => {
  const [Type, setType] = useState("All");
  const [ArrangeDate, setArrangeDate] = useState("Newest First");
  const [tempData, setTempData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  const [Transactions, setTransactions] = useState([
    {
      type: "Credit Top-Up",
      date: "2025-06-14",
      time: "10:30 AM",
      amount: "+1500",
    },
    {
      type: "Raffle Win",
      date: "2025-06-14",
      time: "12:45 PM",
      amount: "+1 NFT",
    },
    { type: "Purchase", date: "2025-06-15", time: "02:15 PM", amount: "-500" },
    {
      type: "Credit Top-Up",
      date: "2025-06-16",
      time: "09:00 AM",
      amount: "+1200",
    },
    { type: "Purchase", date: "2025-06-16", time: "03:30 PM", amount: "-750" },
    {
      type: "Raffle Win",
      date: "2025-06-17",
      time: "11:00 AM",
      amount: "+1 NFT",
    },
    {
      type: "Credit Top-Up",
      date: "2025-06-18",
      time: "04:15 PM",
      amount: "+1000",
    },
    { type: "Purchase", date: "2025-06-18", time: "05:45 PM", amount: "-300" },
    {
      type: "Raffle Win",
      date: "2025-06-19",
      time: "01:30 PM",
      amount: "+2 NFT",
    },
    {
      type: "Credit Top-Up",
      date: "2025-06-20",
      time: "10:00 AM",
      amount: "+800",
    },
    { type: "Purchase", date: "2025-06-20", time: "06:00 PM", amount: "-600" },
    {
      type: "Raffle Win",
      date: "2025-06-21",
      time: "03:00 PM",
      amount: "+1 NFT",
    },
    {
      type: "Credit Top-Up",
      date: "2025-06-22",
      time: "11:30 AM",
      amount: "+500",
    },
    { type: "Purchase", date: "2025-06-22", time: "07:30 PM", amount: "-400" },
    {
      type: "Raffle Win",
      date: "2025-06-23",
      time: "02:45 PM",
      amount: "+3 NFT",
    },
    {
      type: "Credit Top-Up",
      date: "2025-06-23",
      time: "09:15 AM",
      amount: "+700",
    },
    { type: "Purchase", date: "2025-06-23", time: "08:00 PM", amount: "-550" },
  ]);

  const StartLoad = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    },2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsLoading(false);
  }

  useEffect(() => {
    let filteredData = Transactions;
    if (Type !== "All") {
      filteredData = Transactions.filter((element) => element.type === Type);
    }
    const ArrangedData = [...filteredData].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return ArrangeDate === "Newest First" ? dateB - dateA : dateA - dateB;
    });
    setTempData(ArrangedData);
  }, [Type, ArrangeDate]);

  return (
    <div className="min-h-screen bg-[var(--neutral-light)]  p-4 flex flex-col gap-4">
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="w-full flex justify-between mb-4">
          <select
            value={Type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 rounded-md border font-heading"
          >
            <option value="All">All</option>
            <option value="Purchase">Purchase</option>
            <option value="Credit Top-Up">Credit Top-Up</option>
            <option value="Raffle Win">Raffle Win</option>
          </select>
          <select
            value={ArrangeDate}
            onChange={(e) => setArrangeDate(e.target.value)}
            className="p-2 rounded-md border font-heading"
          >
            <option value="Newest First">Newest First</option>
            <option value="Oldest First">Oldest First</option>
          </select>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {Type === "All" ? (
              <AllCharts details={tempData} />
            ) : Type === "Purchase" ? (
              <PurchaseChart details={tempData} />
            ) : Type === "Raffle Win" ? (
              <RaffleWinChart details={tempData} />
            ) : (
              <TopUpChart details={tempData} />
            )}
          </div>
        </div>
      </div>

      {IsOpen && (
  <div className="absolute top-0 left-0 inset-0 bg-opacity-30 text-black flex justify-center items-center backdrop-blur-sm z-50 px-4">
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
      <h2 className="font-bold text-xl text-center">Transaction History</h2>

      <ul className="flex flex-col gap-3 overflow-y-auto pr-2">
        {tempData.map((item, i) => (
          <li key={i} className="flex justify-between border-b pb-1">
            <p className="font-medium text-gray-700 font-body">{item.type}</p>
            <p className="text-xs text-gray-400 font-body">
              {item.date} {item.time}
            </p>
            <p className="font-semibold text-green-600 font-body">
              {item.amount}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg shadow">
          Confirm
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg shadow"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


      <div className="bg-white rounded-xl flex flex-col gap-4 items-center shadow-md p-4">
        <ul className="flex flex-col  gap-2 max-h-64 overflow-y-auto w-full pr-2">
          {tempData.length > 0 &&
            [0, 1, 2].map((idx, i) => (
              <li key={i} className="flex justify-between items-center p-2">
                <p className="font-medium text-gray-700 font-body">
                  {tempData[idx].type}
                </p>
                <p className="text-xs text-gray-400 font-body">
                  {tempData[idx].date} {tempData[idx].time}
                </p>
                <p className="font-semibold text-green-600 font-body">
                  {tempData[idx].amount}
                </p>
              </li>
            ))}
        </ul>
        <button
          className="text-white font-light px-6 w-fit h-fit py-2 hover:bg-gray-950 transition-all duration-300 hover:cursor-pointer bg-[var(--primary-color)] text-sm"
          onClick={() => StartLoad()}
        >
          {IsLoading ? (
            <div className="flex gap-3 items-center font-heading">
              <p>Loading..</p> <Spinner />
            </div>
          ) : (
            <p className="font-heading">Load More</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Transactionhistory;
