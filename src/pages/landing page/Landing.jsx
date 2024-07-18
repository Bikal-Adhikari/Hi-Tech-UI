import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./landing.css";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <Container className="mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="path-to-your-image"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Million products in our store!</h3>
              <p>Explore the new range</p>
              <button className="btn btn-dark">Discover Now</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Information Section */}
      <Container className="mt-4 text-center">
        <Row>
          <Col>
            <div>
              <i className="bi bi-truck"></i>
              <p>Shipping Worldwide</p>
            </div>
          </Col>
          <Col>
            <div>
              <i className="bi bi-arrow-return-left"></i>
              <p>14 Days Return</p>
            </div>
          </Col>
          <Col>
            <div>
              <i className="bi bi-shield-lock"></i>
              <p>Security Payment</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Landing;
