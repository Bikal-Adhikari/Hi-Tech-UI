import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductAction } from "../../features/products/productAction";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);

  const categoryProducts = products.filter(
    (product) => product.category === categoryId
  );

  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">Category Products</h1>
        <Row>
          {categoryProducts.map((product) => (
            <Col md={4} key={product._id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`${imgEp}/${product.thumbnail}` || "placeholder.jpg"}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={`/product/${product._id}`}
                      className="text-decoration-none text-dark"
                    >
                      {product.name}
                    </Link>
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-success">
                    ${product.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryPage;
