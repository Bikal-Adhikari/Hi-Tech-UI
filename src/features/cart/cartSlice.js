import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { _id, quantity } = action.payload;
      const existingItem = (state.items).findIndex((item) => item._id === _id);
      if (existingItem >= 0) {
        state.items[existingItem].quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity: quantity });
      }
    },
  },
});

export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;
