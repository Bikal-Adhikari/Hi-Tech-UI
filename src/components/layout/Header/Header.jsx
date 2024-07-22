import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
  return (
    <>
      {/* Header for larger screens */}
      <div className="d-none d-md-block">
        <Navbar bg="white" className="border-bottom">
          <Container fluid>
            <Navbar.Brand href="#" className="me-auto h-logo">
              Hi-Tech
            </Navbar.Brand>
            <Form className="d-flex mx-auto" style={{ width: "50%" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">
                <FaSearch />
              </Button>
            </Form>
            <Nav className="ms-auto">
              <Nav.Link href="/profile">
                <FaUser />
              </Nav.Link>
              <Nav.Link href="/cart">
                <FaShoppingCart />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  0
                </span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#catalog">Catalog</Nav.Link>
              <Nav.Link href="#other-pages">Sale</Nav.Link>
              <Nav.Link href="#sale">Services</Nav.Link>
              <Nav.Link href="#blog">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Header for iPad or smaller screens */}
      <Navbar bg="white" expand="md" className="d-md-none border-bottom">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#" className="mx-auto h-logo">
            Hi-Tech
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/profile">
              <FaUser />
            </Nav.Link>
            <Nav.Link href="/cart">
              <FaShoppingCart className="position-absolute" />
              <span className="position-relative top-0 start-80 translate-middle badge rounded-pill bg-dark">
                0
              </span>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav" className="mt-2">
            <Form className="d-flex w-100 mb-2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">
                <FaSearch />
              </Button>
            </Form>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#catalog">Catalog</Nav.Link>
              <Nav.Link href="#other-pages">Sale</Nav.Link>
              <Nav.Link href="#sale">Services</Nav.Link>
              <Nav.Link href="#blog">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
