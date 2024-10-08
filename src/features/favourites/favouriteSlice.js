import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const product = action.payload;
      if (!state.favourites.find((item) => item._id === product._id)) {
        state.favourites.push(product);
      }
    },
    removeFromFavorites(state, action) {
      const productId = action.payload;
      state.favourites = state.favourites.filter(
        (item) => item._id !== productId
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
