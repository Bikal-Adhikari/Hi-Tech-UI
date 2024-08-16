import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  cat: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, { payload = [] }) => {
      state.category = payload;
    },
    setCat: (state, { payload = [] }) => {
      state.cat = payload;
    },
  },
});

const { reducer, actions } = categorySlice;
export const { setCategory, setCat } = actions;
export default reducer;
