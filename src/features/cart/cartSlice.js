import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  statusTab: false,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { _id, quantity } = action.payload;
      const existingItem = state.items.findIndex((item) => item._id === _id);
      if (existingItem >= 0) {
        state.items[existingItem].quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity: quantity });
      }
      state.statusTab = true;
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
    closeStatusTab(state) {
      state.statusTab = false;
    },
  },
});

export const { addToCart, toggleStatusTab, closeStatusTab } =
  cartReducer.actions;
export default cartReducer.reducer;
