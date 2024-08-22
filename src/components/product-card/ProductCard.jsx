import { Container, Row, Col } from "react-bootstrap";
import "./productCard.css";
import ProductCardItem from "./ProductCardItem";

const ProductCard = ({ products, onAddToCart, onAddToFavorites }) => {
  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;
  const productsArray = Array.isArray(products) ? products : [products];

  return (
    <Container>
      <Row>
        {productsArray.length === 0 ? (
          <p className="text-center">No products available in this category.</p>
        ) : (
          productsArray.map((product) => (
            <Col md={4} key={product._id} className="mb-4">
              <ProductCardItem
                product={product}
                imgPath={imgPath}
                onAddToCart={onAddToCart}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductCard;
