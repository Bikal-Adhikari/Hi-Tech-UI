import { addNewOrder, fetchAllOrders } from "./orderAxios";
import { setOrders } from "./orderSlice";

export const addNewOrderAction = (orderData) => async (dispatch) => {
  const { status } = await addNewOrder(orderData);
  if (status === "success") {
    dispatch(fetchOrderAction());
  }
};

export const fetchOrderAction = () => async (dispatch) => {
  const { status, orders } = await fetchAllOrders();

  if (status === "success") {
    dispatch(setOrders(orders));
  }
};
