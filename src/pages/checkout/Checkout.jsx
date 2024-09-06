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
  const location = useLocation();
  const state = location.state || {};
  const { items, totalAmount } = state || {};

  console.log("items:", items);
  console.log("totalAmount", totalAmount);

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
      if (useBillingAsShipping) {
        setBillingAddress(parsedAddress);
      }
    }
  }, [user, useBillingAsShipping]);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "shipping") {
      setShippingAddress((prev) => ({ ...prev, [name]: value }));
    } else if (type === "billing") {
      setBillingAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProceedToPayment = () => {
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

                {/* Address Form */}
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
                          <CustomInput
                            label="City"
                            type="text"
                            placeholder="Enter city"
                            name="city"
                            value={shippingAddress.city}
                            onChange={(e) => handleInputChange(e, "shipping")}
                            disabled={useBillingAsShipping}
                          />
                          <CustomInput
                            label="State"
                            type="text"
                            placeholder="Enter state"
                            name="state"
                            value={shippingAddress.state}
                            onChange={(e) => handleInputChange(e, "shipping")}
                            disabled={useBillingAsShipping}
                          />
                          <CustomInput
                            label="Country"
                            type="text"
                            placeholder="Enter Country"
                            name="country"
                            value={shippingAddress.country}
                            onChange={(e) => handleInputChange(e, "shipping")}
                            disabled={useBillingAsShipping}
                          />
                          <CustomInput
                            label="Zip Code"
                            type="text"
                            placeholder="Enter zip code"
                            name="zip"
                            value={shippingAddress.zip}
                            onChange={(e) => handleInputChange(e, "shipping")}
                            disabled={useBillingAsShipping}
                          />
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
                            <CustomInput
                              label="City"
                              type="text"
                              placeholder="Enter city"
                              name="city"
                              value={billingAddress.city}
                              onChange={(e) => handleInputChange(e, "billing")}
                            />
                            <CustomInput
                              label="State"
                              type="text"
                              placeholder="Enter state"
                              name="state"
                              value={billingAddress.state}
                              onChange={(e) => handleInputChange(e, "billing")}
                            />
                            <CustomInput
                              label="Country"
                              type="text"
                              placeholder="Enter country"
                              name="country"
                              value={billingAddress.country}
                              onChange={(e) => handleInputChange(e, "billing")}
                            />
                            <CustomInput
                              label="Zip Code"
                              type="text"
                              placeholder="Enter zip code"
                              name="zip"
                              value={billingAddress.zip}
                              onChange={(e) => handleInputChange(e, "billing")}
                            />
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
