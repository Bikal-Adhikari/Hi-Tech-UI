import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark " data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
              <Link
                to="admin/profile"
                style={{ textDecoration: "none", color: "white" }}
                className="p-3"
              >
                Profile
              </Link>
              {/* <NavDropdown.Item href="admin/profile">Profile</NavDropdown.Item> */}
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
