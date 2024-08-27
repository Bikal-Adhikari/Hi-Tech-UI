import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleOrderAction } from "../../features/order/orderAction";
import StarRating from "../../components/rating/StarRating";

const OrderDetails = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderInfo);
  const [review, setReview] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    if (_id !== order?._id) {
      dispatch(fetchSingleOrderAction(_id));
    }
  }, [dispatch, order, _id]);

  const handleReviewChange = (productId, value) => {
    setReview((prevReview) => ({
      ...prevReview,
      [productId]: value,
    }));
  };

  const handleRatingChange = (productId, value) => {
    setRating((prevRating) => ({
      ...prevRating,
      [productId]: value,
    }));
  };

  const handleSubmitReview = (productId) => {
    // dispatch(submitReviewAction(productId, review[productId], rating[productId]));
  };

  return (
    <div>
      <Header />
      <Container className="vh-200">
        <h1 className="text-center">Order Details</h1>
        <hr />
        {order && (
          <>
            <Row>
              <Col xs={12} className="mb-4">
                <h2>Order ID: {order._id}</h2>
                <p>Status: {order.status}</p>
                <p>Ordered At: {new Date(order.createdAt).toLocaleString()}</p>
              </Col>
              <Col xs={12}>
                <h3>Products:</h3>
                {order.items.length > 0 ? (
                  order.items.map((product) => (
                    <Row key={product._id} className="mb-3">
                      <Col xs={8}>
                        <h4>{product.name}</h4>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: ${product.price}</p>
                        {product.review ? (
                          <>
                            <p>
                              <strong>Rating:</strong> {product.review.rating}{" "}
                              &#9733;
                            </p>
                            <p>
                              <strong>Review:</strong> {product.review.text}
                            </p>
                          </>
                        ) : (
                          <>
                            <Form.Group controlId={`rating-${product._id}`}>
                              <Form.Label>Rating:</Form.Label>
                              <StarRating
                                rating={rating[product._id] || 0}
                                onRatingChange={(value) =>
                                  handleRatingChange(product._id, value)
                                }
                              />
                            </Form.Group>
                            <Form.Group controlId={`review-${product._id}`}>
                              <Form.Label>Write a Review:</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Write your review here..."
                                value={review[product._id] || ""}
                                onChange={(e) =>
                                  handleReviewChange(
                                    product._id,
                                    e.target.value
                                  )
                                }
                              />
                            </Form.Group>
                            <Button
                              variant="primary"
                              onClick={() => handleSubmitReview(product._id)}
                              className="mt-2"
                            >
                              Submit Review
                            </Button>
                          </>
                        )}
                      </Col>
                    </Row>
                  ))
                ) : (
                  <p>No products found in this order.</p>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default OrderDetails;
