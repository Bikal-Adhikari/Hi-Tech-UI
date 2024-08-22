import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "./productCard.css";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../features/favourites/favouriteSlice";

const ProductCardItem = ({ product, imgPath, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  // Destructure items correctly from the favoriteInfo state
  const { items } = useSelector((state) => state.favoriteInfo) || { items: [] };

  const handleFavoriteClick = () => {

    if (isFavorite) {
      dispatch(removeFromFavorites(product._id));
    } else {
      dispatch(addToFavorites(product));
    }
    setIsFavorite((prevState) => !prevState);
    
  };

  // Update the isFavorite state based on Redux store
  useEffect(() => {
    if (items && items.length > 0) {
      setIsFavorite(items.some((item) => item._id === product._id));
    }
  }, [items, product._id]);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={`${imgPath}/${product.thumbnail}` || "placeholder.jpg"}
        alt={product.name}
        className="card-img-top"
      />
      <Card.Body key={isFavorite}>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Title>
            <Link
              to={`/product/${product.slug}/${product._id}`}
              className="text-decoration-none text-dark"
            >
              {product.name}
            </Link>
          </Card.Title>
          <div key={isFavorite ? "favorite" : "not-favorite"}>
            <FaHeart
              className={`heart-icon ${
                isFavorite ? "text-danger" : "text-muted"
              }`}
              onClick={handleFavoriteClick}
              style={{ cursor: "pointer" }}
            />
          </div>
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

export default ProductCardItem;
