import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../../components/common/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import {
  getPublishableKey,
  postPaymentIntentAction,
} from "../../features/payment/paymentaction";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const location = useLocation();
  const { state } = location;
  const { user, items, totalAmount, shippingAddress, billingAddress } =
    state || {};

  useEffect(() => {
    const fetchStripeKey = async () => {
      try {
        const publishableKey = await getPublishableKey();
        const stripe = loadStripe(publishableKey);
        setStripePromise(stripe);
      } catch (error) {
        console.error("Error fetching Stripe key", error);
      }
    };

    fetchStripeKey();
  }, []);

  useEffect(() => {
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

  return (
    <>
      <Header />
      <Container className="mt-5 vh-100">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h2 className="text-center">Payment</h2>

                {/* Order Summary */}
                <Card className="mb-4">
                  <Card.Header>Order Summary</Card.Header>
                  <Card.Body>
                    {items?.map((item, index) => (
                      <div key={index}>
                        <p>
                          {item.name} - {item.quantity} x ${item.price}
                        </p>
                      </div>
                    ))}
                    <h5>Total: ${totalAmount}</h5>
                  </Card.Body>
                </Card>

                {clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                ) : (
                  <p>Loading payment form...</p>
                )}
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
