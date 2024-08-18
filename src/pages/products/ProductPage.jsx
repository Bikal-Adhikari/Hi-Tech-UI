import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProductAction } from "../../features/products/productAction";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const ProductPage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { prod } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  useEffect(() => {
    dispatch(fetchSingleProductAction(_id));
  }, [dispatch, _id]);

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
              <Button variant="info" className="me-2">
                -
              </Button>
              <Badge bg="info" className="px-3 py-2">
                1
              </Badge>
              <Button variant="info" className="ms-2">
                +
              </Button>
            </div>
            <Button variant="dark" className="w-100 py-2 shadow">
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
