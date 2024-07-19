import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import "./landing.css";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { FaShip, FaUndo, FaShieldAlt } from "react-icons/fa";
import watchBackground from "../../assets/images/watch.webp";

const Landing = () => {
  return (
    <>
      <Header />

      <Container className="px-0 mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid" // Bootstrap class for responsive image
              src={watchBackground}
              alt="Smart Watches"
            />
            <Carousel.Caption className="text-start">
              <h6 className="text-uppercase text-black">
                Explore the new range
              </h6>
              <h1 className="display-4 text-black">
                Million products
                <br />
                in our store!
              </h1>
              <Button variant="dark" className="mt-3">
                DISCOVER NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="mt-4">
        <Row className="text-center">
          <Col md={4}>
            <FaShip size={30} />
            <h6 className="mt-2">Shipping Worldwide</h6>
            <p className="text-muted">Special financing and earn rewards</p>
          </Col>
          <Col md={4}>
            <FaUndo size={30} />
            <h6 className="mt-2">14 Days Return</h6>
          </Col>
          <Col md={4}>
            <FaShieldAlt size={30} />
            <h6 className="mt-2">Security Payment</h6>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Landing;
