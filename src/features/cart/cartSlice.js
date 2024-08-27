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
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === _id
      );
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ ...action.payload, quantity });
      }
      state.statusTab = true;
    },
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },
    closeStatusTab(state) {
      state.statusTab = false;
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = quantity;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  toggleStatusTab,
  closeStatusTab,
  updateItemQuantity,
  removeItem,
  clearCart,
} = cartReducer.actions;

export default cartReducer.reducer;
