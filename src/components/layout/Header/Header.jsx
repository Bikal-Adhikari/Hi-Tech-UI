import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { FaSearch, FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAction } from "../../../features/users/userAction";
import { useEffect, useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const { items } = useSelector((state) => state.cartInfo);
  const { favourites } = useSelector((state) => state.favoriteInfo) || {
    favourites: [],
  };
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [items]);

  return (
    <>
      {/* Header for larger screens */}
      <div className="d-none d-md-block">
        <Navbar bg="white" className="border-bottom">
          <Container fluid>
            <Navbar.Brand className="me-auto h-logo">
              <Link className="" to="/">
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
              <Nav.Link as={Link} to="/wishlist" className="position-relative">
                <FaHeart />
                {favourites.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favourites.length}
                  </span>
                )}
              </Nav.Link>
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
              <Nav.Link
                as={Link}
                to="/cart"
                className="w-10 h-10 rounded-full flex justify-content-center align-items-center relative"
              >
                <FaShoppingCart className="w-6" />
                <span className="position-absolute top-2/3 right-1/2 translate-middle badge rounded-full bg-dark w-5 h-5 flex justify-content-center align-items-center">
                  {totalQuantity}
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
          <Navbar.Brand href="/" className="mx-auto h-logo">
            Hi-Tech
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              as={Link}
              to="/cart"
              className="w-10 h-10 rounded-full flex justify-content-center align-items-center relative"
            >
              <FaShoppingCart className="w-6" />
              <span className="position-absolute top-2/3 right-1/2 translate-middle badge rounded-full bg-dark w-5 h-5 flex justify-content-center align-items-center">
                {totalQuantity}
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
              <NavDropdown
                title={
                  <span>
                    <FaUser /> User
                  </span>
                }
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
              <Nav.Link as={Link} to="/wishlist" className="position-relative">
                <FaHeart />
                {favourites.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {favourites.length}
                  </span>
                )}{" "}
                Whislist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
