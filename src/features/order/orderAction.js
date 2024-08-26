import { addNewOrder, fetchAllOrders } from "./orderAxios";
import { setOrders } from "./orderSlice";

export const addNewOrderAction = (orderData) => async (dispatch) => {
  const { status } = await addNewOrder(orderData);
  if (status === "success") {
    dispatch(fetchOrderAction());
  }
};

export const fetchOrderAction = (userId) => async (dispatch) => {
  const { status, orders } = await fetchAllOrders(userId);

  if (status === "success") {
    dispatch(setOrders(orders));
  }
};
