import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrderAction } from "../../features/order/orderAction";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (user) {
      dispatch(fetchOrderAction(user._id));
    }
  }, [user, dispatch]);

  // Assume you want to display the most recent order
  const recentOrder =
    orders && orders.length > 0 ? orders[orders.length - 1] : null;

  const { shippingAddress, billingAddress, items, totalAmount } =
    recentOrder || {};

  return (
    <>
      <Header />
      <Container className="mt-5 vh-200">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Order Confirmation</h2>
                <h4>Thank you for your purchase, {user?.fName}!</h4>
                <p className="mt-4">
                  <strong>Order Summary:</strong>
                </p>
                {recentOrder ? (
                  <>
                    <Card className="mb-4">
                      <Card.Header>Shipping Address</Card.Header>
                      <Card.Body>
                        <p>
                          <strong>Street:</strong> {shippingAddress?.street}
                        </p>
                        <p>
                          <strong>City:</strong> {shippingAddress?.city}
                        </p>
                        <p>
                          <strong>State:</strong> {shippingAddress?.state}
                        </p>
                        <p>
                          <strong>Country:</strong> {shippingAddress?.country}
                        </p>
                        {/* <p>
                          <strong>Zip Code:</strong> {shippingAddress?.zip}
                        </p> */}
                      </Card.Body>
                    </Card>
                    <Card className="mb-4">
                      <Card.Header>Billing Address</Card.Header>
                      <Card.Body>
                        <p>
                          <strong>Street:</strong> {billingAddress?.street}
                        </p>
                        <p>
                          <strong>City:</strong> {billingAddress?.city}
                        </p>
                        <p>
                          <strong>State:</strong> {billingAddress?.state}
                        </p>
                        <p>
                          <strong>Country:</strong> {billingAddress?.country}
                        </p>
                        {/* <p>
                          <strong>Zip Code:</strong> {billingAddress?.zip}
                        </p> */}
                      </Card.Body>
                    </Card>
                    <Card className="mb-4">
                      <Card.Header>Order Details</Card.Header>
                      <Card.Body>
                        <ul>
                          {items?.map((item, index) => (
                            <li key={index}>
                              <strong>{item.name}</strong> - ${item.price} x{" "}
                              {item.quantity}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3">
                          <strong>Total Amount:</strong> ${totalAmount}
                        </p>
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <p>No order details available.</p>
                )}
                <Button
                  variant="primary"
                  onClick={() => (window.location.href = "/")}
                >
                  Back to Home
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default OrderConfirmation;
