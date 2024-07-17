import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.css"; // Import the CSS file

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container fluid className="text-center footer-container">
        <Row>
          <Col>
            <div className="footer-logo mb-4">Hi-Tech</div>
          </Col>
        </Row>
        <Row>
          <Nav className="justify-content-center footer-menu d-flex">
            <Nav.Item>
              <Nav.Link href="#">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#service">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
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
