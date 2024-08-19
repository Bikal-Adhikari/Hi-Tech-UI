import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Col, Image, Form } from "react-bootstrap";
import "./sidemenu.css"; // Custom CSS for additional styling

const SideMenu = ({ onClose }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartInfo);

  const handleQuantityChange = (id, quantity) => {
    // Dispatch an action to update the quantity in the cart
  };

  const handleRemoveItem = (id) => {
    // Dispatch an action to remove the item from the cart
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`side-menu position-fixed top-0 end-0 bg-light shadow-lg h-100 ${
        !items.length && "d-none"
      }`}
    >
      <Container className="side-menu-content d-flex flex-column h-100">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between align-items-center">
            <h2>Your Shopping Cart</h2>
            <Button
              variant="outline-secondary"
              className="close-btn"
              onClick={onClose}
            >
              &times;
            </Button>
          </Col>
        </Row>
        <Row className="flex-grow-1 overflow-auto">
          {items.length === 0 ? (
            <Col>
              <p>No items in cart</p>
            </Col>
          ) : (
            items.map((item) => (
              <Row key={item._id} className="cart-item mb-3">
                <Col xs={4}>
                  <Image src={item.img} alt={item.name} fluid rounded />
                </Col>
                <Col xs={8} className="d-flex flex-column">
                  <h4 className="mb-2">{item.name}</h4>
                  <p className="text-muted">${item.price}</p>
                  <Form.Select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, +e.target.value)
                    }
                    className="mb-2"
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </Form.Select>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))
          )}
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-between align-items-center">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <Button
              variant="success"
              className="w-100"
              onClick={() => alert("Proceeding to Checkout")}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideMenu;
