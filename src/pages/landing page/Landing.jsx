// import main from "../../assets/images/main.svg";
// import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./landing.css";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <Header />
      <Container className="page">
        <Row className="align-items-center">
          <Col md={6} className="info">
            <h1>
              Hi <span className="text-primary">Tech</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              ipsum sint repellat ex hic nostrum velit dolor, dicta tempora sunt
              illo ipsa ullam laudantium quasi debitis, quos aperiam omnis ad
              error saepe temporibus labore architecto voluptate. Ipsa totam
              reiciendis at atque! Accusantium eaque ipsa reprehenderit velit
              aperiam dolorem esse repudiandae!
            </p>
            <Link to="/sign-in">
              <Button variant="primary" className="btn-hero">
                Login/Register
              </Button>
            </Link>
          </Col>
          <Col md={6} className="text-center">
            <img src="" alt="abc" className="img-fluid main-img" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Landing;
