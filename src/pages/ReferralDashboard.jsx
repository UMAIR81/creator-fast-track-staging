import React from "react";
import CreditsLineChart from "../Components/CreditsLineChart";
import StripeTopUpForm from "../Components/StripeTopUpForm";
import Topupcredits from "../Components/Topupcredits";
import Transactionhistory from "../Components/Transactionhistory";

const ReferralDashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Referral Dashboard</h1>
      <StripeTopUpForm />
      <Topupcredits />
      <CreditsLineChart />
      <Transactionhistory />
    </div>
  );
};

export default ReferralDashboard;