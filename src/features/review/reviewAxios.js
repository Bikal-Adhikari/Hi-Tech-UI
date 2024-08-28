import { apiProcessor } from "../../services/axios";
const reviewEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/review";

export const fetchAllUserReviews = (userId) => {
  const obj = {
    url: `${reviewEP}?userId=${userId}`,
    method: "get",
  };

  return apiProcessor(obj);
};
export const fetchAllReviews = (productId) => {
  const obj = {
    url: `${reviewEP}/all?productId=${productId}`,
    method: "get",
  };

  return apiProcessor(obj);
};
export const addNewReview = (review) => {
  const obj = {
    url: reviewEP,
    method: "post",
    data: review,
  };

  return apiProcessor(obj);
};
