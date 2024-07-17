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
              job <span className="text-primary">tracking</span> app
            </h1>
            <p>
              Find your perfect job easily. Create a profile, browse top
              opportunities, and apply with one click. Start your career journey
              today!
            </p>
            <Link to="/sign-in">
              <Button variant="primary" className="btn-hero">
                Login/Register
              </Button>
            </Link>
          </Col>
          <Col md={6} className="text-center">
            <img src="" alt="jobHunt" className="img-fluid main-img" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Landing;
