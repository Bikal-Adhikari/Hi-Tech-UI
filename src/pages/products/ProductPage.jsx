import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProductAction } from "../../features/products/productAction";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Table,
} from "react-bootstrap";
import { addToCart } from "../../features/cart/cartSlice";
import { fetchAllReviewsAction } from "../../features/review/reviewAction";
import { fetchSingleCategoryAction } from "../../features/category/categoryAction";

const ProductPage = () => {
  const { _id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(""); // State to track the currently displayed image
  const dispatch = useDispatch();
  const { prod } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;
  const { reviews } = useSelector((state) => state.reviewInfo);
  const { cat } = useSelector((state) => state.categoryInfo);

  useEffect(() => {
    dispatch(fetchSingleProductAction(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    if (_id === prod._id) {
      dispatch(fetchAllReviewsAction(_id));
    }
  }, [dispatch, prod, _id]);

  useEffect(() => {
    dispatch(fetchSingleCategoryAction(prod.parentCatId));
  }, [prod, dispatch]);
  useEffect(() => {
    if (prod && prod.thumbnail) {
      setSelectedImage(`${imgEp}/${prod.thumbnail}`); // Set the default image on load
    }
  }, [prod, imgEp]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1 > prod.qty ? prod.qty : quantity + 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: prod._id,
        quantity: quantity,
        name: prod.name,
        price: prod.price,
        img: selectedImage,
      })
    );
  };

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const averageRating = calculateAverageRating(reviews);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  return (
    <div>
      <Header />
      <Container className="my-5">
        {/* Product Image and Information */}
        <Row>
          <Col md={6} className="text-center">
            {/* Image Gallery */}
            <Card>
              <Card.Img
                src={selectedImage || "placeholder.jpg"}
                className="img-fluid"
                alt={prod.name}
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
              <Card.Body>
                {/* Display additional product images here */}
                {prod.images && prod.images.length > 0 && (
                  <div className="d-flex justify-content-center mt-2">
                    {prod.images.map((img, index) => (
                      <img
                        key={index}
                        src={`${imgEp}/${img}`}
                        alt={`Product Image ${index + 1}`}
                        className="img-thumbnail mx-1"
                        style={{
                          width: "60px",
                          height: "60px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(`${imgEp}/${img}`)} // Change main image on click
                      />
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            {/* Product Overview */}
            <h1 className="fs-3 text-uppercase fw-bold">{prod.name}</h1>
            <p className="text-muted">{prod.category}</p>
            <p className="fw-bold fs-4 text-success">${prod.price}</p>
            <div className="d-flex align-items-center mb-2">
              <span className="me-2">{averageRating} ★</span>
              <span className="text-muted">({reviews.length} reviews)</span>
            </div>
            <p>{prod.overview}</p>
            <Button variant="link" className="p-0">
              Read More
            </Button>

            {/* Quantity and Add to Cart */}
            <div className="d-flex align-items-center mb-3 mt-2">
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
                disabled={quantity >= prod.stock}
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

        {/* Detailed View */}
        <Row className="mt-4">
          <Col>
            {/* Description Section */}
            <h4 className="fs-5">Description</h4>
            <p>{prod.description}</p>

            {/* Specifications Section */}
            <h4 className="fs-5 mt-4">Specifications</h4>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>
                    <strong>SKU</strong>
                  </td>
                  <td>{prod.sku}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Brand/Category</strong>
                  </td>
                  <td>{cat.title}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Original Price</strong>
                  </td>
                  <td>${prod.price}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Price After Discount</strong>
                  </td>
                  <td>${prod.price - prod.salesPrice}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Stock Available</strong>
                  </td>
                  <td>{prod.qty} units</td>
                </tr>
              </tbody>
            </Table>

            {/* Reviews Section */}
            <h4 className="fs-5 mt-4">Reviews</h4>
            {reviews && reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="mb-3">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">{review.rating} ★</span>
                    <span className="ms-2 text-muted">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet. Be the first to review!</p>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductPage;
