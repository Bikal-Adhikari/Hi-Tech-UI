import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css"; // Import the CSS file
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container fluid className="text-center footer-container">
        <Row>
          <Col>
            <div className="footer-logo mb-4">
              <Link to="/">Hi-Tech</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Nav className="justify-content-evenly footer-menu d-flex">
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">ABOUT</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">CONTACT</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">FAQ</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">SERVICES</Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col>
            <p className="copyright-text">
              Copyright ©{" "}
              <a href="http://www.linkedin.com/in/bikal-adhikari">
                Bikal Adhikari
              </a>{" "}
              | All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
