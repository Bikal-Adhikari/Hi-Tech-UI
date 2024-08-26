import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import {
  getPublishableKey,
  postPaymentIntentAction,
} from "../../features/payment/paymentaction";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../../components/common/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const location = useLocation();
  const { state } = location;

  const { user, items, totalAmount, shippingAddress, billingAddress } =
    state || {};

  useEffect(() => {
    // Fetch and set the Stripe publishable key
    const fetchStripeKey = async () => {
      try {
        const publishableKey = await getPublishableKey();
        if (publishableKey) {
          const stripe = loadStripe(publishableKey);
          setStripePromise(stripe);
        } else {
          console.error("Publishable key is invalid or missing.");
        }
      } catch (error) {
        console.error("Error fetching Stripe publishable key:", error);
      }
    };

    fetchStripeKey();
  }, []); // Run once on component mount

  useEffect(() => {
    // Create a payment intent only if stripePromise is available
    const createPaymentIntent = async () => {
      if (stripePromise && totalAmount) {
        try {
          const clientSecret = await postPaymentIntentAction({
            user,
            items: items.map((item) => ({
              name: item.name,
              productId: item._id, 
              price: item.price,
              quantity: item.quantity,
            })),
            totalAmount,
            shippingAddress,
            billingAddress,
          });
          setClientSecret(clientSecret);
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      }
    };

    createPaymentIntent();
  }, [
    stripePromise,
    totalAmount,
    user,
    items,
    shippingAddress,
    billingAddress,
  ]);
  if (!stripePromise) {
    return (
      <div>
        <Header />
        <Container className="mt-5">
          <Row className="justify-content-center">
            <h2 className="text-center">Loading payment form...</h2>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Container className="mt-5 vh-100">
        <Row className="justify-content-center">
          <h2 className="text-center">Payment Form</h2>
          <Col md={6}>
            {clientSecret ? (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
              </Elements>
            ) : (
              <div>Loading payment form...</div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
