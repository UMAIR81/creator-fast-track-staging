import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { LuMessageCirclePlus } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import Spinner from "./Spinner";
import "../App.css";

const Dashboard = ({ currentTab, setCurrentTab }) => {
  const [IsLeftOpen, setIsLeftOpen] = useState(false);
  const [IsRightOpen, setIsRightOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [IsLoading2, setIsLoading2] = useState(false);

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

  const LoadLeft = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLeftOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    setIsLeftOpen(false);
    setIsLoading(false);
  };

  const LoadRight = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setIsLoading2(false);
      setIsRightOpen(true);
    }, 2000);
  };

  const handleClose2 = () => {
    setIsRightOpen(false);
    setIsLoading2(false);
  };

  return (
    <>
      <div className="flex justify-center flex-col bg-[var(--neutral-light)] items-center gap-10 rounded-lg  shadow p-4">
        <div className="flex  justify-between w-full">
          <div className="flex items-center gap-3">
            <input
              type="search"
              placeholder="Search Collectibles"
              className="text-gray-600 bg-neutral-200 focus:outline-none focus:ring-0 p-3 py-2 w-96"
            />
            <FaSearch />
          </div>
          <div className="flex items-center gap-9">
            <div className="flex gap-5 items-center">
              <IoMdNotifications className="text-gray-400 text-2xl hover:scale-95 duration-200 transition-all cursor-pointer" />
              <LuMessageCirclePlus className="text-gray-400 text-2xl hover:scale-95 duration-200 transition-all cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="random person image"
                className="shadow h-8 w-8 border-2 rounded-full"
              />
              <div className="flex items-center gap-3 hover:bg-gray-200 rounded-2xl p-2 px-3">
                <p className="text-black font-semibold">Aditya</p>
                <FaChevronDown />
              </div>
            </div>
          </div>

        </div>
        {IsLeftOpen && (
          <div className="absolute top-0 left-0 inset-0 bg-opacity-30 text-black flex justify-center items-center font-body backdrop-blur-sm z-50 px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <h2 className="font-bold text-xl text-center font-heading">
                Your Activities
              </h2>
              <ul className="flex flex-col gap-3 overflow-y-auto pr-2 font-body">
                {Transactions.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-1">
                    <p className="font-medium text-gray-700">{item.type}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                    <p className="font-semibold text-green-600">
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

        {IsRightOpen && (
          <div className="absolute top-0 left-0 inset-0 bg-opacity-30 text-black flex justify-center font-body items-center backdrop-blur-sm z-50 px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              <h2 className="font-bold text-xl text-center font-heading">
                Your Activities
              </h2>
              <ul className="flex flex-col gap-3 overflow-y-auto pr-2 font-body">
                {Transactions.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-1">
                    <p className="font-medium text-gray-700">{item.type}</p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                    <p className="font-semibold text-green-600">
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
                  onClick={handleClose2}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-row w-full gap-2">
          <div className="w-1/2 gap-2 flex flex-col p-2">
            <div className="flex flex-col w-fit p-2 gap-5">
              <div className="flex flex-col gap-1 justify-start">
                <p className="font-bold text-2xl font-heading text-[var(--primary-color)] text-start">
                  Welcome to Alatree Ventures
                </p>
                <p className="text-gray-700 text-start font-body">
                  Explore your Digital Collectibles and Rewards.
                </p>
              </div>
              <button
                className="text-white font-semibold px-10 w-fit h-fit py-3 font-heading hover:bg-gray-950 transition-all duration-300 hover:cursor-pointer bg-[var(--primary-color)]"
                onClick={() => setCurrentTab("Top Up Credits")}
              >
                Add Credits
              </button>
            </div>
            <div className="flex gap-4 font-body">
              {[1, 2].map((_, i) => (
                <div
                  key={i}
                  className="py-2 px-5 flex flex-col transition-all duration-300 gap-2 bg-white"
                >
                  <p className="font-bold text-xl text-start text-[var(--primary-color)] font-body">
                    Upcoming Raffles
                  </p>
                  <p className="text-gray-700 text-start font-body">Week 12</p>
                  <div className="flex gap-7 items-center">
                    <div className="flex -space-x-3">
                      <img
                        className="w-7 h-7 rounded-full border-2 border-white shadow"
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Avatar 1"
                      />
                      <img
                        className="w-7 h-7 rounded-full border-2 border-white shadow"
                        src="https://randomuser.me/api/portraits/men/45.jpg"
                        alt="Avatar 2"
                      />
                      <img
                        className="w-7 h-7 rounded-full border-2 border-white shadow"
                        src="https://randomuser.me/api/portraits/men/76.jpg"
                        alt="Avatar 3"
                      />
                    </div>
                    <p className="text-gray-700">Raffle Team</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="font-semibold text-lg text-[var(--primary-color)] self-start pl-2 font-heading">
                Your Activites
              </p>
              <p className="font-light text-gray-800 self-start pl-2 text-sm font-body">
                Your 3 Recent Activites
              </p>
              <ul className="w-full ">
                {[0, 1, 2].map((idx, i) => (
                  <li key={i} className="flex justify-between items-center p-2">
                    <p className="font-medium text-gray-700">
                      {Transactions[idx].type}
                    </p>
                    <p className="text-xs text-gray-400">
                      {Transactions[idx].date}
                    </p>
                    <p className="font-semibold text-green-600">
                      {Transactions[idx].amount}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className="text-white font-light px-6 w-fit h-fit py-2 hover:bg-gray-950 transition-all duration-300 hover:cursor-pointer bg-[var(--primary-color)] text-sm"
                onClick={() => LoadLeft()}
              >
                {IsLoading ? (
                  <div className="flex gap-3 font-heading items-center">
                    <p>Loading..</p> <Spinner />
                  </div>
                ) : (
                  <p className="font-heading">Load More</p>
                )}
              </button>
            </div>
          </div>

          <div className="w-1/2 justify-between flex flex-col items-center p-2">
            <div className="flex w-full justify-between gap-4">
              {/* Card 1 */}
              <div className="bg-gray-200 p-4 flex flex-col items-center w-1/3 h-fit justify-between">
                <p className="font-light text-gray-800 self-start pl-2 font-body text-sm">
                  Your 3 Recent Activity
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-200 p-4 flex flex-col items-center justify-center w-1/3 h-fit">
                <p className="mt-4 text-center font-body">Help & Support</p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-200 p-4 flex flex-col items-center justify-center w-1/3 h-fit">
                <p className="mt-4 text-center font-body">FAQs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {[
                ["Purchase", 8],
                ["Credits", 16],
                ["Raffles", 4],
                ["Winning", 1],
                ["History", 26],
                ["Details", 3],
              ].map(([label, value], i) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 font-light">{label}</p>
                    <p className="text-sm text-gray-900 font-semibold">
                      {value}
                    </p>
                  </div>
                  {i < 5 && <div className="h-8 w-px bg-gray-400"></div>}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-col gap-2 items-center w-full ">
              <p className="font-semibold text-lg text-[var(--primary-color)] font-heading self-start pl-2">
                Your Activites
              </p>
              <p className="font-light text-gray-800 self-start pl-2 font-body text-sm">
                Your 3 Recent Activites
              </p>
              <ul className="w-full font-body ">
                {[0, 1, 2].map((idx, i) => (
                  <li key={i} className="flex justify-between items-center p-2">
                    <p className="font-medium font-body text-gray-700">
                      {Transactions[idx].type}
                    </p>
                    <p className="text-xs text-gray-400">
                      {Transactions[idx].date}
                    </p>
                    <p className="font-semibold text-green-600 font-body">
                      {Transactions[idx].amount}
                    </p>
                  </li>
                ))}
              </ul>
              <button
                className="text-white font-body font-light px-6 w-fit h-fit py-2 hover:bg-gray-950 transition-all duration-300 hover:cursor-pointer bg-[var(--primary-color)] text-sm"
                onClick={() => LoadRight()}
              >
                {IsLoading2 ? (
                  <div className="flex gap-3 font-body items-center">
                    <p>Loading..</p> <Spinner />
                  </div>
                ) : (
                  <p className="font-heading">Load More</p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
