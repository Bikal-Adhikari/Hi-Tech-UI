import { Navbar, Nav, Container } from "react-bootstrap";
export const Header = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Hi-Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#catalog">Catalog</Nav.Link>
              <Nav.Link href="#other-pages">Other pages</Nav.Link>
              <Nav.Link href="#sale">Sale</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#account">Account</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
