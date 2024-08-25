// Payment.js
import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
} from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  // Function to create Payment Intent on the server side
  const createPaymentIntent = async () => {
    try {
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1000 }), // Replace 1000 with the actual amount in your application
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      setPaymentError("Failed to create Payment Intent. Please try again.");
    }
  };

  useEffect(() => {
    // Call the createPaymentIntent function on component mount
    createPaymentIntent();
  }, []);

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setPaymentError("Stripe has not loaded properly.");
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!clientSecret) {
      await createPaymentIntent();
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setPaymentSuccess(
        `Payment successful! PaymentIntent ID: ${paymentIntent.id}`
      );
      setPaymentError(null);
    } else {
      setPaymentError("Payment failed. Please try again.");
      setPaymentSuccess(null);
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-lg p-3 mb-5 bg-white rounded">
              <Card.Body>
                <h2 className="text-center mb-4">Payment</h2>
                {paymentError && <Alert variant="danger">{paymentError}</Alert>}
                {paymentSuccess && (
                  <Alert variant="success">{paymentSuccess}</Alert>
                )}
                <Form onSubmit={handlePaymentSubmit}>
                  <Form.Group className="mb-3">
                    <CardElement />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    disabled={!stripe || isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;
