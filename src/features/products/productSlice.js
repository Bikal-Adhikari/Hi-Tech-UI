import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  prod: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload = [] }) => {
      state.products = payload;
    },
    setProd: (state, { payload = {} }) => {
      state.prod = payload;
    },
  },
});

const { reducer, actions } = productSlice;
export const { setProducts, setProd } = actions;
export default reducer;
