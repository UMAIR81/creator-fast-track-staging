import React from "react";
import CreditsLineChart from "../components/CreditsLineChart";
import StripeTopUpForm from "../components/StripeTopUpForm";
import Topupcredits from "../components/Topupcredits";
import Transactionhistory from "../components/Transactionhistory";

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