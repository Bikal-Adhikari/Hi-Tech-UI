import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { addNewOrderAction } from "../../../features/order/orderAction";
import { useDispatch } from "react-redux";

export const CheckoutForm = ({
  user,
  items,
  totalAmount,
  shippingAddress,
  billingAddress,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const dispatch = useDispatch()

  useEffect(()=>{
dispatch(addNewOrderAction())
  },[])

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/order-confirmation`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
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
