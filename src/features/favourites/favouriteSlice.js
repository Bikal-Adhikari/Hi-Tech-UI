import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to store favorite items
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(
        (favItem) => favItem._id === item._id
      );
      if (existingItemIndex === -1) {
        state.items.push(item);
      }
    },
    removeFromFavorites(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
    },
    toggleFavorite(state, action) {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(
        (favItem) => favItem._id === item._id
      );
      if (existingItemIndex === -1) {
        state.items.push(item);
      } else {
        state.items = state.items.filter((favItem) => favItem._id !== item._id);
      }
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorite } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
