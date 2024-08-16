import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductAction } from "../../features/products/productAction";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);

  const product = products.find((prod) => prod._id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">{product.name}</h1>
        <Row>
          <Col md={6}>
            <Card.Img
              src={`${imgEp}/${product.thumbnail}` || "placeholder.jpg"}
              className="img-fluid"
              alt={product.name}
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-success">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductPage;
