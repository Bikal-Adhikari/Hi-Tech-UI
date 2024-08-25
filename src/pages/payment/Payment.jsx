import { useState } from "react";
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

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setPaymentError("Stripe has not loaded properly.");
      setIsProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Example client-side logic for payment intent
    const { error, paymentIntent } = await stripe.createPaymentIntent({
      amount: 1000, // Example amount, should be dynamically set
      currency: "usd",
      payment_method: cardElement.id,
      confirm: true,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(
        `Payment successful! PaymentIntent ID: ${paymentIntent.id}`
      );
      setPaymentError(null);
    }

    setIsProcessing(false);
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Payment</h2>
                {paymentError && <Alert variant="danger">{paymentError}</Alert>}
                {paymentSuccess && (
                  <Alert variant="success">{paymentSuccess}</Alert>
                )}
                <Form onSubmit={handlePaymentSubmit}>
                  <Form.Group className="mb-3">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                              color: "#aab7c4",
                            },
                          },
                          invalid: {
                            color: "#9e2146",
                          },
                        },
                      }}
                    />
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
