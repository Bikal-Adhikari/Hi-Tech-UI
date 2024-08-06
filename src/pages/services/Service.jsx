import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaTools,
  FaShippingFast,
  FaSyncAlt,
  FaHeadset,
  FaShieldAlt,
  FaCreditCard,
} from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <Header />
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaTools size={50} className="mb-3" />
                <Card.Title>Product Installation</Card.Title>
                <Card.Text>
                  We offer professional installation services for all our tech
                  products. Our experts ensure a seamless setup for your
                  convenience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaShippingFast size={50} className="mb-3" />
                <Card.Title>Fast Shipping</Card.Title>
                <Card.Text>
                  Enjoy fast and reliable shipping for all orders. We ensure
                  your products are delivered to your doorstep promptly and
                  safely.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaSyncAlt size={50} className="mb-3" />
                <Card.Title>Easy Returns</Card.Title>
                <Card.Text>
                  Our hassle-free return policy allows you to return products
                  within 30 days. We strive to make returns as easy as possible
                  for our customers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaHeadset size={50} className="mb-3" />
                <Card.Title>24/7 Customer Support</Card.Title>
                <Card.Text>
                  Our dedicated customer support team is available 24/7 to
                  assist you with any queries or issues you may have.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaShieldAlt size={50} className="mb-3" />
                <Card.Title>Warranty Services</Card.Title>
                <Card.Text>
                  We provide warranty services for all our products, ensuring
                  peace of mind and protection for your purchases.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <FaCreditCard size={50} className="mb-3" />
                <Card.Title>Secure Payments</Card.Title>
                <Card.Text>
                  Our platform offers secure payment options to ensure your
                  transactions are safe and protected.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Service;
