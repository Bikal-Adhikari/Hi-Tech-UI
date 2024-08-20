import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../../features/cart/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();

  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Header />

      {/* Cart + Summary */}
      <main className="bg-light my-5">
        <Container>
          <Row>
            {/* Cart */}
            <Col lg={9}>
              <Card className="border shadow-0">
                <Card.Body>
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div className="row gy-3 mb-4" key={item._id}>
                        {/* Cart Item */}
                        <Col lg={5}>
                          <div className="me-lg-5">
                            <div className="d-flex">
                              <img
                                src={item.img}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                                alt={item.name}
                              />
                              <div>
                                <a href="#" className="nav-link">
                                  {item.name}
                                </a>
                                <p className="text-muted">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col
                          lg={2}
                          sm={6}
                          xs={6}
                          className="d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
                        >
                          <Form.Select
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                item._id,
                                Number(e.target.value)
                              )
                            }
                            style={{ width: "100px" }}
                            className="me-4"
                          >
                            {[...Array(10).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Select>
                          <div>
                            <p className="h6">${item.price * item.quantity}</p>
                            <small className="text-muted text-nowrap">
                              {" "}
                              ${item.price} / per item{" "}
                            </small>
                          </div>
                        </Col>
                        <Col
                          lg
                          className="d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2"
                        >
                          <div className="float-md-end">
                            <Button
                              variant="light"
                              className="border px-2 icon-hover-primary"
                            >
                              <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                            </Button>
                            <Button
                              variant="light"
                              className="border text-danger icon-hover-danger"
                              onClick={() => handleRemoveItem(item._id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </Col>
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty.</p>
                  )}

                  <div className="border-top pt-4 mx-4 mb-4">
                    <p>
                      <i className="fas fa-truck text-muted fa-lg"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Summary */}
            <Col lg={3}>
              <Card className="mb-3 border shadow-0">
                <Card.Body>
                  <Form>
                    <Form.Group>
                      <Form.Label>Have coupon?</Form.Label>
                      <div className="input-group">
                        <FormControl
                          type="text"
                          className="border"
                          placeholder="Coupon code"
                        />
                        <Button variant="light" className="border">
                          Apply
                        </Button>
                      </div>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="shadow-0 border">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">${calculateTotalPrice().toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-$60.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">$14.00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">
                      ${(calculateTotalPrice() - 60 + 14).toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-3">
                    <Button variant="success" className="w-100 shadow-0 mb-2">
                      Make Purchase
                    </Button>
                    <Button variant="light" className="w-100 border mt-2">
                      Back to shop
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Recommended */}
      <section>
        <Container className="my-5">
          <header className="mb-4">
            <h3>Recommended items</h3>
          </header>
          {/* Add recommended items here */}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
