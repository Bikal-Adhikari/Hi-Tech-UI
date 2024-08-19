import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProductAction } from "../../features/products/productAction";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { addToCart } from "../../features/cart/cartSlice";

const ProductPage = () => {
  const { _id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { prod } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  useEffect(() => {
    dispatch(fetchSingleProductAction(_id));
  }, [dispatch, _id]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: prod._id,
        quantity: quantity,
        name: prod.name,
        price: prod.price,
        img: `${imgEp}/${prod.thumbnail}`,
      })
    );
  };

  return (
    <div>
      <Header />
      <Container className="my-5">
        <Row>
          <Col md={6} className="text-center">
            <Card.Img
              src={
                prod.thumbnail
                  ? `${imgEp}/${prod.thumbnail}`
                  : "placeholder.jpg"
              }
              className="img-fluid"
              alt={prod.name}
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>
          <Col md={6}>
            <h1 className="fs-3 text-uppercase fw-bold">{prod.name}</h1>
            <p className="fw-bold fs-4 text-success">${prod.price}</p>
            <div className="d-flex align-items-center mb-3">
              <Button
                variant="info"
                className="me-2"
                onClick={handleMinusQuantity}
              >
                -
              </Button>
              <Badge bg="info" className="px-3 py-2">
                {quantity}
              </Badge>
              <Button
                variant="info"
                className="ms-2"
                onClick={handlePlusQuantity}
              >
                +
              </Button>
            </div>
            <Button
              variant="dark"
              className="w-100 py-2 shadow"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4 className="fs-5">Description</h4>
            <p>{prod.description}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductPage;
