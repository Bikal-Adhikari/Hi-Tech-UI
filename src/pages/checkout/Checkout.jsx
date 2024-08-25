import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { parseAddress } from "../../helpers/addressUtils";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { useNavigate, useLocation } from "react-router-dom";

const Checkout = () => {
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const location = useLocation(); // Retrieve the location object
  const { state } = location; // Destructure state from location
  const { items, totalAmount } = state || {}; // Get product and total amount from state

  // Initialize state for addresses
  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [useBillingAsShipping, setUseBillingAsShipping] = useState(false);

  useEffect(() => {
    if (user && user.address) {
      const parsedAddress = parseAddress(user.address);
      setShippingAddress(parsedAddress);
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
    console.log(
      "Proceeding to payment with address:",
      shippingAddress,
      user._id
    );

    // Navigate to payment page and pass required data in state
    navigate("/payment", {
      state: {
        user,
        items,
        totalAmount,
        shippingAddress,
        billingAddress,
      },
    });
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Checkout</h2>
                <Form>
                  <Row>
                    <Col md={12} lg={6}>
                      <Card className="mb-4">
                        <Card.Header>Shipping Address</Card.Header>
                        <Card.Body>
                          <CustomInput
                            label="Street"
                            type="text"
                            placeholder="Enter street"
                            name="street"
                            value={shippingAddress.street}
                            onChange={(e) => handleInputChange(e, "shipping")}
                            disabled={useBillingAsShipping}
                          />
                          {/* Other address fields... */}
                        </Card.Body>
                      </Card>
                    </Col>

                    {!useBillingAsShipping && (
                      <Col md={12} lg={6}>
                        <Card>
                          <Card.Header>Billing Address</Card.Header>
                          <Card.Body>
                            <CustomInput
                              label="Street"
                              type="text"
                              placeholder="Enter street"
                              name="street"
                              value={billingAddress.street}
                              onChange={(e) => handleInputChange(e, "billing")}
                            />
                            {/* Other billing address fields... */}
                          </Card.Body>
                        </Card>
                      </Col>
                    )}
                    <Form.Check
                      type="checkbox"
                      label="Use billing address as shipping address"
                      checked={useBillingAsShipping}
                      onChange={() => setUseBillingAsShipping((prev) => !prev)}
                    />
                  </Row>
                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    onClick={handleProceedToPayment}
                  >
                    Proceed to Payment
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

export default Checkout;
