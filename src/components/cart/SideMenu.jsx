import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import "./sidemenu.css";
import {
  closeStatusTab,
  updateItemQuantity,
  removeItem,
} from "../../features/cart/cartSlice";

const SideMenu = () => {
  const dispatch = useDispatch();
  const { items, statusTab } = useSelector((state) => state.cartInfo);

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const totalPrice = items.reduce((total, item) => {
    const itemPrice = item.salesPrice
      ? item.price - item.salesPrice
      : item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div
      className={`side-menu position-fixed top-0 end-0 bg-light shadow-lg h-100 ${
        statusTab ? "open" : ""
      }`}
    >
      <Container className="side-menu-content d-flex flex-column h-100">
        <Row className="mb-4">
          <Col className="d-flex justify-content-between align-items-center">
            <h2>Your Cart</h2>
            <Button
              variant="outline-secondary"
              className="close-btn"
              onClick={() => dispatch(closeStatusTab())}
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
                  <p className="text-muted">
                    {item.discountPrice ? (
                      <>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          ${item.price}
                        </span>{" "}
                        <span>${item.discountPrice}</span>
                      </>
                    ) : (
                      <span>${item.price}</span>
                    )}
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity + 1)
                      }
                      disabled={(item.quantity === item.qty)}
                    >
                      +
                    </Button>
                  </div>
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
