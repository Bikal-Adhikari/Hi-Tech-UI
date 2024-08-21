import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "./productCard.css";

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
                onAddToFavorites={onAddToFavorites}
              />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

const ProductCardItem = ({ product, imgPath, onAddToCart, onAddToFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorites(product); // Call the function to handle adding to favorites
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`${imgPath}/${product.thumbnail}` || "placeholder.jpg"}
        alt={product.name}
        className="card-img-top"
      />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>
            <Link
              to={`/product/${product.slug}/${product._id}`}
              className="text-decoration-none text-dark"
            >
              {product.name}
            </Link>
          </Card.Title>
          <FaHeart
            className={`heart-icon ${isFavorite ? "text-danger" : "text-muted"}`}
            onClick={handleFavoriteClick}
            style={{ cursor: "pointer" }}
          />
        </div>
        <Card.Text>
          {product.salesPrice ? (
            <>
              <span className="text-danger">
                <del>${product.price}</del>
              </span>
              <br />
              <span className="text-success fw-bold">
                Now: ${product.price - product.salesPrice}
              </span>
            </>
          ) : (
            <span className="text-dark">Price: ${product.price}</span>
          )}
        </Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
          <FaShoppingCart /> Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
