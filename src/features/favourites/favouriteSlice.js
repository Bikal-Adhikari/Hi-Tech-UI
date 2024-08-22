// favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const product = action.payload;
      if (!state.items.find((item) => item._id === product._id)) {
        state.items.push(product);
      }
    },
    removeFromFavorites(state, action) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item._id !== productId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
