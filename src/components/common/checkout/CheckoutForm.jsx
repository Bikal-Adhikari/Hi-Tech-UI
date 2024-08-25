import { useState } from "react";

export const CheckoutForm = () => {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form id="payment-form" onSubmit={handleOnSubmit}>
      <button disabled={isProcessing} id="submit">
        <span> {isProcessing ? "Processing..." : "Pay Now"}</span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
