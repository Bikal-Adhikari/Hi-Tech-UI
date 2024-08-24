import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const Checkout = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

  useEffect(() => {
    if (user && user.address) {
      setShippingAddress(user.address); 
    }
  }, [user]);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "shipping") {
      setShippingAddress({ ...shippingAddress, [name]: value });
    } else if (type === "billing") {
      setBillingAddress({ ...billingAddress, [name]: value });
    }
  };

  const handleProceedToPayment = () => {
    // Implement payment logic here or redirect to payment page
    console.log("Proceeding to payment with address:", shippingAddress);
  };

  return (
    <>
      <Header />
      <Container className="mt-5 vh-100">
        <h2>Checkout</h2>
        <Form>
          <Row>
            <Col md={6}>
              <h4>Shipping Address</h4>
              <Form.Group controlId="formShippingStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter street"
                  name="street"
                  value={shippingAddress.street}
                  onChange={(e) => handleInputChange(e, "shipping")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formShippingCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="city"
                  value={shippingAddress.city}
                  onChange={(e) => handleInputChange(e, "shipping")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formShippingState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state"
                  name="state"
                  value={shippingAddress.state}
                  onChange={(e) => handleInputChange(e, "shipping")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formShippingZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip code"
                  name="zip"
                  value={shippingAddress.zip}
                  onChange={(e) => handleInputChange(e, "shipping")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Check
                type="checkbox"
                label="Use billing address as shipping address"
                checked={useBillingAsShipping}
                onChange={() => setUseBillingAsShipping((prev) => !prev)}
              />
            </Col>
            <Col md={6}>
              <h4>Billing Address</h4>
              <Form.Group controlId="formBillingStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter street"
                  name="street"
                  value={billingAddress.street}
                  onChange={(e) => handleInputChange(e, "billing")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formBillingCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="city"
                  value={billingAddress.city}
                  onChange={(e) => handleInputChange(e, "billing")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formBillingState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter state"
                  name="state"
                  value={billingAddress.state}
                  onChange={(e) => handleInputChange(e, "billing")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
              <Form.Group controlId="formBillingZip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter zip code"
                  name="zip"
                  value={billingAddress.zip}
                  onChange={(e) => handleInputChange(e, "billing")}
                  disabled={useBillingAsShipping}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            className="mt-3"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
