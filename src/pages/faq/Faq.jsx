import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";

const Faq = () => {
  return (
    <div>
      <Header />
      <main className="vh-100">
        {" "}
        <Container fluid className="py-5">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Frequently Asked Questions</h1>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Hi-Tech?</Accordion.Header>
                  <Accordion.Body>
                    Hi-Tech is a leading provider of advanced technology
                    solutions, including web development, software engineering,
                    and IT consulting.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How can I contact support?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can contact our support team via email at
                    support@hi-tech.com or by calling our customer service line
                    at (123) 456-7890.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Where can I find more information?
                  </Accordion.Header>
                  <Accordion.Body>
                    For more information about our services and products, visit
                    our <a href="/about">About Us</a> page or check out our blog
                    for the latest updates.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How do I update my profile?
                  </Accordion.Header>
                  <Accordion.Body>
                    To update your profile, log in to your account and navigate
                    to the profile settings page where you can edit your
                    information.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Do you offer any discounts?
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer seasonal promotions and discounts. Sign up for our
                    newsletter to stay informed about the latest offers and
                    deals.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
