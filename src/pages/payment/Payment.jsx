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
import "./payment.css";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const fetchStripeKey = async () => {
      try {
        const publishableKey = await getPublishableKey();
        setStripePromise(loadStripe(publishableKey));
      } catch (error) {
        console.error("Error fetching Stripe publishable key:", error);
      }
    };

    fetchStripeKey();
  }, []);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const clientSecret = await postPaymentIntentAction(amount);
        setClientSecret(clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, []);

  console.log(stripePromise, clientSecret);

  return (
    <>
      <Header />
      <Container className="mt-5 vh-100">
        <Row className="justify-content-center">
          <h2 className="text-center">Payment Form </h2>
          <Col md={6}>
            {stripePromise && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
              </Elements>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
