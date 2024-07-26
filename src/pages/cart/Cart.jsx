import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";

const Cart = () => {
  return (
    <div>
      <Header />

      {/* Cart + Summary */}
      <section className="bg-light my-5">
        <Container>
          <Row>
            {/* Cart */}
            <Col lg={9}>
              <Card className="border shadow-0">
                <Card.Body>
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  <div className="row gy-3 mb-4">
                    {/* Cart Item */}
                    <Col lg={5}>
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/11.webp"
                            className="border rounded me-3"
                            style={{ width: "96px", height: "96px" }}
                            alt="item"
                          />
                          <div>
                            <a href="#" className="nav-link">
                              Winter jacket for men and lady
                            </a>
                            <p className="text-muted">Yellow, Jeans</p>
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
                      <Form.Select style={{ width: "100px" }} className="me-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Form.Select>
                      <div>
                        <p className="h6">$1156.00</p>
                        <small className="text-muted text-nowrap">
                          {" "}
                          $460.00 / per item{" "}
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
                        >
                          {" "}
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </div>

                  {/* Additional items... */}

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
                    <p className="mb-2">$329.00</p>
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
                    <p className="mb-2 fw-bold">$283.00</p>
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
      </section>

      {/* Recommended */}
      <section>
        <Container className="my-5">
          <header className="mb-4">
            <h3>Recommended items</h3>
          </header>

          {/* <Row>
            <Col lg={3} md={6} sm={6}>
              <Card className="px-4 border shadow-0 mb-4 mb-lg-0">
                <div className="mask px-2" style={{ height: "50px" }}>
                  <div className="d-flex justify-content-between">
                    <Badge bg="danger" className="pt-1 mt-3 ms-2">
                      New
                    </Badge>
                    <a href="#">
                      <i className="fas fa-heart text-primary fa-lg float-end pt-3 m-2"></i>
                    </a>
                  </div>
                </div>
                <a href="#" className="">
                  <Card.Img
                    src="https://mdbootstrap.com/img/bootstrap-ecommerce/items/7.webp"
                    className="rounded-2"
                  />
                </a>
                <Card.Body className="d-flex flex-column pt-3 border-top">
                  <a href="#" className="nav-link">
                    Gaming Headset with Mic
                  </a>
                  <div className="price-wrap mb-2">
                    <strong>$18.95</strong>
                    <del>$24.99</del>
                  </div>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <Button variant="outline-primary" className="w-100">
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row> */}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
