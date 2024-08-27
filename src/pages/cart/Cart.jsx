import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cartInfo);
  const dispatch = useDispatch();

  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const totalQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalOriginalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalPrice = items.reduce((total, item) => {
    const itemPrice = item.salesPrice
      ? item.price - item.salesPrice
      : item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  const totalDiscountPrice = items.reduce((total, item) => {
    return total + item.salesPrice * item.quantity;
  }, 0);

  const totalTax = totalQuantity * 4;
  const totalAmount = (totalPrice + totalTax).toFixed(2);

  const handleMakePurchase = () => {
    navigate("/checkout", {
      state: {
        items,
        totalAmount,
      },
    });
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div>
      <Header />

      {/* Cart + Summary */}
      <main className="bg-light my-5">
        <Container>
          <Row>
            {/* Cart */}
            <Col lg={9}>
              <Card className="border shadow-0">
                <Card.Body>
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div className="row gy-3 mb-4" key={item._id}>
                        {/* Cart Item */}
                        <Col lg={5}>
                          <div className="me-lg-5">
                            <div className="d-flex">
                              <img
                                src={item.img}
                                className="border rounded me-3"
                                style={{ width: "96px", height: "96px" }}
                                alt={item.name}
                              />
                              <div>
                                <a href="#" className="nav-link">
                                  {item.name}
                                </a>
                                <p className="text-muted">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col
                          lg={2}
                          sm={6}
                          xs={6}
                          className="d-flex flex-row flex-lg-column flex-xl-row text-nowrap"
                        >
                          <div className="d-flex align-items-center">
                            <Button
                              variant="light"
                              className="border me-2"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity - 1
                                )
                              }
                            >
                              -
                            </Button>
                            <p className="mb-0">{item.quantity}</p>
                            <Button
                              variant="light"
                              className="border ms-2"
                              onClick={() =>
                                handleQuantityChange(
                                  item._id,
                                  item.quantity + 1
                                )
                              }
                              disabled={item.quantity === item.qty}
                            >
                              +
                            </Button>
                          </div>
                          <div className="mt-2">
                            {item.salesPrice ? (
                              <div>
                                <span className="text-danger">
                                  <del>Price: ${item.price}</del>
                                </span>
                                <br />
                                <span className="text-success fw-bold">
                                  Now: ${item.price - item.salesPrice}
                                </span>
                              </div>
                            ) : (
                              <span className="text-success fw-bold">
                                Price: ${item.price}
                                <br />
                              </span>
                            )}

                            <small className="text-muted text-nowrap">
                              $
                              {item.salesPrice
                                ? item.price - item.salesPrice
                                : item.price}
                              / per item
                            </small>
                          </div>
                        </Col>
                        <Col
                          lg
                          className="d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2"
                        >
                          <div className="float-md-end">
                            <Button
                              variant="light"
                              className="border text-danger icon-hover-danger"
                              onClick={() => handleRemoveItem(item._id)}
                            >
                              <RiDeleteBin5Line />
                              Remove
                            </Button>
                          </div>
                        </Col>
                      </div>
                    ))
                  ) : (
                    <p>Your cart is empty.</p>
                  )}

                  <div className="border-top pt-4 mx-4 mb-4">
                    <p>
                      <i className="fas fa-truck text-muted fa-lg"></i> Free
                      Delivery within 1-2 weeks
                    </p>
                    <p className="text-muted">
                      Our Hi-Tech app revolutionizes the way you shop by
                      providing an interactive and user-friendly interface to
                      browse, select, and purchase the latest tech products.
                      With real-time updates, personalized recommendations, and
                      secure payment options, you can shop with confidence and
                      ease. Enjoy the benefits of our seamless integration with
                      top vendors, ensuring you get the best deals on
                      cutting-edge technology. All orders come with free
                      delivery, ensuring your new tech arrives safely and
                      swiftly.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Summary */}
            <Col lg={3}>
              <Card className="mb-3 border shadow-0">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total original price:</p>
                    <p className="mb-2">${totalOriginalPrice.toFixed(2)}</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-${totalDiscountPrice}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total discounted price:</p>
                    <p className="mb-2">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">${totalTax}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">${totalAmount}</p>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="success"
                      className="w-100 shadow-0 mb-2"
                      onClick={() => handleMakePurchase()}
                    >
                      Make Purchase
                    </Button>
                    <Button
                      variant="light"
                      className="w-100 border mt-2"
                      onClick={() => handleContinueShopping()}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Recommended */}
      <section>
        <Container className="my-5">
          <header className="mb-4">
            <h3>Recommended items</h3>
          </header>
          {/* Add recommended items here */}
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
