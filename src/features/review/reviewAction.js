import {
  addNewReview,
  fetchAllReviews,
  fetchAllUserReviews,
} from "./reviewAxios";
import { setReviews, setUserReview } from "./reviewSlice";

export const addNewReviewAction = (review) => async (dispatch) => {
  const { status } = await addNewReview(review);
  if (status === "success") {
    dispatch(fetchAllReviewsAction());
  }
};

export const fetchAllUserReviewsAction = (userId) => async (dispatch) => {
  const { status, reviews } = await fetchAllUserReviews(userId);
  if (status === "success") {
    dispatch(setUserReview(reviews));
  }
};
export const fetchAllReviewsAction = (productId) => async (dispatch) => {
  const { status, reviews } = await fetchAllReviews(productId);

  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};
