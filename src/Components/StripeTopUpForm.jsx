import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const StripeTopUpForm = ({ onTopUp, closeForm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [Amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      alert(error?.message);
    } else {
      onTopUp(Amount);
      setAmount("");
    }
  }

  return (
    // ✅ BLURRED BACKGROUND OVERLAY
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10">

      {/* ✅ POPUP FORM */}
      <form
        onSubmit={handleSubmit}
        /*className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" */
        className = "bg-white p-6 rounded-lg shadow-md w-[90%] max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded" />

        <div className="flex flex-col mt-4 gap-4">
          <input
            id="myAmount"
            name="amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="Enter amount"
            className="p-3 text-black rounded border w-full"
          />

          <button
            className="p-2 bg-green-800 rounded text-white font-semibold"
            disabled={!stripe}
          >
            Make Top-up
          </button>

          <button
            type="button"
            onClick={closeForm}
            className="p-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default StripeTopUpForm;
