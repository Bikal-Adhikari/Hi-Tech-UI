import { Container, Row, Col, Carousel, Button, Card } from "react-bootstrap";
import "./landing.css";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { FaShip, FaUndo, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import watchBackground from "../../assets/images/watch.webp";
import laptopImg from "../../assets/images/laptops.jpg";
import headphoneImg from "../../assets/images/headphone.jpg";
import phoneImg from "../../assets/images/phone.jpeg";
import droneImg from "../../assets/images/drone.jpeg";
import cameraImg from "../../assets/images/camera.jpeg";

const bestSellers = [
  {
    name: "iPhone 14 Pro Max",
    price: "$1,099.00",
    img: phoneImg,
    link: "/products/iphone-14-pro-max",
  },
  {
    name: "MacBook Pro 16-inch",
    price: "$2,399.00",
    img: laptopImg,
    link: "/products/macbook-pro-16",
  },
  {
    name: "Sony WH-1000XM4",
    price: "$349.00",
    img: headphoneImg,
    link: "/products/sony-wh-1000xm4",
  },
];

const reviews = [
  {
    user: "John Doe",
    product: "iPhone 14 Pro Max",
    review: "Amazing phone with incredible features!",
    img: phoneImg,
  },
  {
    user: "Jane Smith",
    product: "Sony WH-1000XM4",
    review: "The noise cancellation is top-notch.",
    img: headphoneImg,
  },
  {
    user: "Michael Brown",
    product: "MacBook Pro 16-inch",
    review: "Powerful and sleek design, perfect for work.",
    img: laptopImg,
  },
];

const categories = [
  { name: "Phones", img: phoneImg, link: "/categories/phones" },
  { name: "Laptops", img: laptopImg, link: "/categories/laptops" },
  { name: "Watches", img: watchBackground, link: "/categories/watches" },
  { name: "Headphones", img: headphoneImg, link: "/categories/headphones" },
  { name: "Drones", img: droneImg, link: "/categories/drones" },
  { name: "Cameras", img: cameraImg, link: "/categories/cameras" },
];

const Landing = () => {
  return (
    <>
      <Header />

      <Container className="px-0 mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={watchBackground}
              alt="Smart Watches"
              height={"600px"}
            />
            <Carousel.Caption className="text-start">
              <h6 className="text-uppercase text-black fw-bolder">
                Explore the new range
              </h6>
              <h1 className="display-4 text-black fw-bolder">
                Million products
                <br />
                in our store!
              </h1>
              <Button variant="dark" className="mt-3">
                DISCOVER NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={laptopImg}
              alt="Laptops"
              height={"600px"}
            />
            <Carousel.Caption className="centered caption-2">
              <h6 className="text-uppercase text-black fw-bolder">
                Unbeatable Prices
              </h6>
              <h1 className="display-4 text-black fw-bolder">
                Top Quality Laptops
                <br />
                Just For You!
              </h1>
              <Button variant="dark" className="mt-3">
                SHOP NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={headphoneImg}
              alt="Headphones"
              height={"600px"}
            />
            <Carousel.Caption className="centered caption-2">
              <h6 className="text-uppercase text-black fw-bolder">
                Crystal Clear Sound
              </h6>
              <h1 className="display-4 text-black fw-bolder">
                Experience Music
                <br />
                Like Never Before
              </h1>
              <Button variant="dark" className="mt-3">
                BUY NOW
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container className="mt-4">
        <Row className="text-center">
          <Col md={4}>
            <FaShip size={70} />
            <h6 className="mt-2">Shipping Worldwide</h6>
            <p className="text-muted">Special financing and earn rewards</p>
          </Col>
          <Col md={4}>
            <FaUndo size={70} />
            <h6 className="mt-2">14 Days Return</h6>
            <p className="text-muted">14-days free return policy</p>
          </Col>
          <Col md={4}>
            <FaShieldAlt size={70} />
            <h6 className="mt-2">Security Payment</h6>
            <p className="text-muted">We accept all major credit cards</p>
          </Col>
        </Row>
      </Container>

      {/* Categories Section */}
      <Container className="mt-4">
        <h3 className="text-center mb-4">Shop by Category</h3>
        <Row>
          {categories.map((category, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Link to={category.link}>
                  <Card.Img variant="top" src={category.img} height="200px" />
                  <Card.Body className="text-center">
                    <Card.Title>{category.name}</Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Best Sellers Section */}
      <Container className="mt-4">
        <h3 className="text-center mb-4">Best Sellers</h3>
        <Row>
          {bestSellers.map((product, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Link to={product.link}>
                  <Card.Img variant="top" src={product.img} height="200px" />
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Customer Reviews Section */}
      <Container className="mt-4">
        <h3 className="text-center mb-4">What Our Customers Are Saying</h3>
        <Row>
          {reviews.map((review, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"{review.review}"</p>
                    <footer className="blockquote-footer">
                      {review.user} on{" "}
                      <cite title="Product">{review.product}</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Landing;
