import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleOrderAction } from "../../features/order/orderAction";
import StarRating from "../../components/rating/StarRating";
import {
  addNewReviewAction,
  fetchAllUserReviewsAction,
} from "../../features/review/reviewAction";

const OrderDetails = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { userReview } = useSelector((state) => state.reviewInfo);

  const [review, setReview] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    if (_id !== order?._id) {
      dispatch(fetchSingleOrderAction(_id));
    }
  }, [dispatch, order, _id]);

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchAllUserReviewsAction(user._id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (order && order.items && userReview) {
      const initialReviews = {};
      const initialRatings = {};

      order.items.forEach((product) => {
        const userProdReview = userReview.find(
          (review) =>
            review.productId.toString() === product.productId.toString()
        );

        if (userProdReview) {
          initialReviews[product.productId] = userProdReview.review;
          initialRatings[product.productId] = userProdReview.rating;
        }
      });

      setReview(initialReviews);
      setRating(initialRatings);
    }
  }, [order, userReview]);

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
    const reviewObj = {
      userId: user._id,
      productId: productId,
      review: review[productId] || "", // Provide default value if review is undefined
      rating: rating[productId] || 0, // Provide default value if rating is undefined
    };

    dispatch(addNewReviewAction(reviewObj));
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
                {order?.items?.length > 0 ? (
                  order?.items?.map((product) => {
                    const userProdReview = userReview.find(
                      (review) =>
                        review.productId.toString() ===
                        product.productId.toString()
                    );
                    return (
                      <Row key={product._id} className="mb-3">
                        <Col xs={8}>
                          <h4>{product.name}</h4>
                          <p>Quantity: {product.quantity}</p>
                          <p>Price: ${product.price}</p>
                          {userProdReview ? (
                            // Display read-only rating and review if already given
                            <>
                              <p>
                                <strong>Rating:</strong>
                                <StarRating rating={userProdReview.rating} />
                              </p>
                              <p>
                                <strong>Review:</strong> {userProdReview.review}
                              </p>
                            </>
                          ) : (
                            // Show input fields for new rating and review
                            <>
                              <Form.Group controlId={`rating-${product._id}`}>
                                <Form.Label>Rating:</Form.Label>
                                <StarRating
                                  rating={rating[product.productId] || 0}
                                  onRatingChange={(value) =>
                                    handleRatingChange(product.productId, value)
                                  }
                                />
                              </Form.Group>
                              <Form.Group controlId={`review-${product._id}`}>
                                <Form.Label>Write a Review:</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  placeholder="Write your review here..."
                                  value={review[product.productId] || ""}
                                  onChange={(e) =>
                                    handleReviewChange(
                                      product.productId,
                                      e.target.value
                                    )
                                  }
                                />
                              </Form.Group>
                              <Button
                                variant="primary"
                                onClick={() =>
                                  handleSubmitReview(product.productId)
                                }
                                className="mt-2"
                              >
                                Submit Review
                              </Button>
                            </>
                          )}
                        </Col>
                      </Row>
                    );
                  })
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
