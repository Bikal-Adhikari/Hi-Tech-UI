import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, { payload = [] }) => {
      state.orders = payload;
    },
    setOrder: (state, { payload = {} }) => {
      state.order = payload;
    },
  },
});

const { reducer, actions } = orderSlice;
export const { setOrders, setOrder } = actions;
export default reducer;
