import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  userReview: [],
};

const orderSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReviews: (state, { payload = [] }) => {
      state.reviews = payload;
    },
    setUserReview: (state, { payload = [] }) => {
      state.userReview = payload;
    },
  },
});

const { reducer, actions } = orderSlice;
export const { setReviews, setUserReview } = actions;
export default reducer;
