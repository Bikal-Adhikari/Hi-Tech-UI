import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  return (
    <Container>
      <Row>
        {products?.length === 0 ? (
          <p className="text-center">No products available in this category.</p>
        ) : (
          products?.map((product) => (
            <Col md={4} key={product._id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`${imgPath}/${product.thumbnail}` || "placeholder.jpg"}
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
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductCard;
