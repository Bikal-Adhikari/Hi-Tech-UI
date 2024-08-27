import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../features/cart/cartSlice";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: `${window.location.origin}/order-confirmation`,
      },
      redirect: "if_required", // Prevents Stripe from automatically redirecting
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
      // Use navigate to redirect to the order-confirmation page without logging out the user
      dispatch(clearCart());
      navigate("/order-confirmation");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleOnSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing} id="submit">
        <span>{isProcessing ? "Processing..." : "Pay Now"}</span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};
