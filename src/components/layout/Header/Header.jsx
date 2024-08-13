import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../../../features/users/userAction";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  return (
    <>
      {/* Header for larger screens */}
      <div className="d-none d-md-block">
        <Navbar bg="white" className="border-bottom">
          <Container fluid>
            <Navbar.Brand className="me-auto h-logo">
              <Link className="" to="/">
                {" "}
                Hi-Tech
              </Link>
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
              <NavDropdown
                title={<FaUser />}
                id="basic-nav-dropdown"
                align="center"
                className="custom-dropdown"
              >
                {user._id ? (
                  <>
                    <NavDropdown.Item as={Link} to="/Userprofile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={`/change-password/${user._id}`}
                    >
                      Change Password
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/"
                      onClick={() => dispatch(logOutUserAction())}
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile Landing
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/signIn">
                      Login
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
              <Nav.Link as={Link} to="/cart">
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/sale">
                Sale
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
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
            <NavDropdown
              title={<FaUser />}
              id="basic-nav-dropdown"
              align="end"
              className="custom-dropdown"
            >
              {user._id ? (
                <>
                  <NavDropdown.Item as={Link} to="/Userprofile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={`/change-password/${user._id}`}
                  >
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/"
                    onClick={() => dispatch(logOutUserAction())}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile Landing
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signIn">
                    Login
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
            <Nav.Link as={Link} to="/cart">
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/catalog">
                Catalog
              </Nav.Link>
              <Nav.Link as={Link} to="/sale">
                Sale
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
