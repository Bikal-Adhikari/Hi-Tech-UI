import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import hitech from "../../assets/images/hi-techstore.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <main className="my-5">
        <Container>
          {/* Overview Section */}
          <Row className="mb-5">
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1>About Hi-Tech</h1>
                <p>
                  Hi-Tech is a cutting-edge application designed to simplify and
                  enhance your digital experiences. With a focus on innovation
                  and user-centric design, Hi-Tech offers a range of tools and
                  features that streamline your daily tasks, whether you're
                  managing projects, shopping online, or exploring the latest
                  trends in technology.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={hitech}
                alt="About Hi-Tech"
                className="img-fluid rounded"
              />
            </Col>
          </Row>

          {/* Mission Section */}
          <Row className="mb-5">
            <Col>
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower individuals and businesses by
                providing innovative technological solutions that are
                accessible, reliable, and easy to use. We strive to stay ahead
                of the curve, constantly evolving our platform to meet the
                changing needs of our users.
              </p>
            </Col>
          </Row>

          {/* Features Section */}
          <Row className="mb-5">
            <Col>
              <h2>Key Features</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h5>Feature 1: Seamless Integration</h5>
                  <p>
                    Hi-Tech integrates smoothly with your existing tools and
                    platforms, making it easier than ever to manage your digital
                    life.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h5>Feature 2: User-Friendly Interface</h5>
                  <p>
                    Our intuitive interface ensures that even the most complex
                    tasks can be accomplished with ease and efficiency.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <h5>Feature 3: Advanced Security</h5>
                  <p>
                    We prioritize your security, implementing advanced measures
                    to protect your data and privacy at all times.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Team Section */}
          <Row className="mb-5">
            <Col>
              <h2>Meet the Team</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="/images/team-member1.jpg" // Replace with an actual image path
                />
                <Card.Body>
                  <h5>Jane Doe</h5>
                  <p>Chief Executive Officer</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src="/images/team-member2.jpg" // Replace with an actual image path
                />
                <Card.Body>
                  <h5>John Smith</h5>
                  <p>Chief Technology Officer</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src="/images/team-member3.jpg" />
                <Card.Body>
                  <h5>Emily Johnson</h5>
                  <p>Head of Product Development</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Section */}
          <Row className="mb-5">
            <Col>
              <h2>Contact Us</h2>
              <p>
                Have questions or want to learn more about Hi-Tech? Feel free to
                reach out to us at{" "}
                <a href="mailto:support@hi-tech.com">support@hi-tech.com</a>.
              </p>
              <Button variant="primary" href="mailto:support@hi-tech.com">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default About;
