import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Graph from "../assets/graph.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Currentraffle = ({ currentTab, setCurrentTab }) => {
  const navigate = useNavigate();
  const pastRaffles = [
    { name: "Gadget Bonanza", date: "Apr 16", gift: "Tablet" },
    { name: "Golden Ticket", date: "Apr 04", gift: "VIP Pass" },
    { name: "Super Sunday", date: "Mar 28", gift: "Gift Card" },
    { name: "Mystery Box", date: "Mar 22", gift: "Smartwatch" },
    { name: "Lucky Draw", date: "Mar 15", gift: "Headphones" },
    { name: "Mega Spin", date: "Mar 08", gift: "Gaming Mouse" },
    { name: "Flash Raffle", date: "Mar 01", gift: "Power Bank" },
    { name: "Daily Deal", date: "Feb 25", gift: "T-shirt" },
    { name: "Surprise Sunday", date: "Feb 18", gift: "Amazon Voucher" },
    { name: "Spin & Win", date: "Feb 11", gift: "Bluetooth Speaker" },
    { name: "Bonus Bonanza", date: "Feb 04", gift: "Movie Tickets" },
  ];

  const [IsOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    const current = parseInt(localStorage.getItem("Credits") || "0", 10);
    if (current < 50) {
      toast.success("Not sufficient Balance");
      return;
    }

    const updated = current - 50;
    localStorage.setItem("Credits", updated.toString());
    toast.success("-50 from Your Balance Done for raffle 🎉");
    setIsOpen(false);
    setTimeout(() => navigate("/RaffleShow"), 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-neutral-100 p-6 flex flex-col gap-9">
        {IsOpen && (
          <div className="absolute top-0 left-0 inset-0  bg-opacity-30 text-black flex justify-center items-center backdrop-blur-sm z-50 px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full flex flex-col gap-4">
              <p className="font-semibold text-lg text-center">
                Do you want to enter? This will deduct{" "}
                <span className="text-red-500 font-bold">-50 Credits</span>.
              </p>
              <div className="flex justify-center gap-4 mt-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg shadow"
                  onClick={handleConfirm}
                >
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

        <div className="p-6">
          <p className="font-bold text-4xl mb-6 text-start font-heading text-[var(--primary-color)]">
            Current Raffles 
          </p>

          <div className="flex flex-row gap-6 items-center">
            {/* Left Side */}
            <div className="lg:w-3/5 flex flex-col gap-6">
              <div className="bg-white rounded-2xl shadow-md p-6 flex hover:bg-slate-50 transition-all duration-300 flex-col gap-4">
                <p className="font-bold text-2xl text-start font-heading">
                  Mystery Box Raffle
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-gray-600">
                    <p className="font-semibold text-start font-body">
                      Entry Cost:
                    </p>
                    <p className="text-red-600 text-start font-body">
                      50 Credits
                    </p>
                  </div>
                  <p className="bg-green-100 text-green-800 px-3 py-1 rounded-lg shadow-sm font-body">
                    Ends in : 03:45:23
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="w-3/5">
                    <p className="mb-1 text-sm font-medium text-gray-700 font-body text-start">
                      Entries Left
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div
                        className="bg-yellow-400 h-3 rounded-full shadow"
                        style={{ width: "24%" }}
                      ></div>
                    </div>
                    <p className="text-sm mt-1 text-gray-600 font-heading">
                      24 of 100
                    </p>
                  </div>

                  <button
                    className="bg-yellow-400 font-heading hover:bg-yellow-300 px-5 py-2 hover:cursor-pointer rounded-lg font-semibold text-lg shadow bg-[var(--primary-color)] text-white"
                    onClick={() => setIsOpen(true)}
                  >
                    Enter Raffle
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-2xl font-heading text-[var(--primary-color)]">
                    Your Recent Wins
                  </p>
                </div>

                <ul className="divide-y">
                  {pastRaffles.slice(0, 3).map((element, index) => (
                    <li key={index} className="flex justify-between py-2">
                      <p className="font-semibold text-gray-700 font-heading">
                        {element.name}
                      </p>
                      <p className="text-gray-500 font-body">{element.date}</p>
                      <p className="text-gray-500 font-body">{element.gift}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              <div className="bg-white rounded-2xl shadow p-5 hover:scale-95 transition-all duration-300 flex flex-col gap-2">
                <p className="font-bold text-2xl text-start font-heading text-[var(--primary-color)]">
                  Next Raffle Entry
                </p>
                <p className="text-gray-700 text-start font-body">Week 12</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5 flex flex-col hover:scale-95 transition-all duration-300 gap-3">
                <p className="font-bold text-2xl text-start font-heading text-[var(--primary-color)]">
                  Upcoming Raffles
                </p>
                <p className="text-gray-700 text-start font-body">Week 12</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-3">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white shadow"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Avatar 1"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white shadow"
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Avatar 2"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white shadow"
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Avatar 3"
                    />
                  </div>
                  <p className="text-gray-700">Raffle Team</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow p-5 flex hover:scale-95 transition-all duration-300 justify-between items-center">
                <div>
                  <p className="font-bold text-xl text-start font-heading text-[var(--primary-color)]">
                    Your Tickets
                  </p>
                  <p className="text-3xl font-bold text-start font-heading">
                    8
                  </p>
                </div>
                <img src={Graph} alt="Graph" className="w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currentraffle;
