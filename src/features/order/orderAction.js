import { addNewOrder, fetchAllOrders, fetchSingleOrder } from "./orderAxios";
import { setOrder, setOrders } from "./orderSlice";

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

export const fetchSingleOrderAction = (_id)=> async (dispatch)=>{
  const {status, order} = await fetchSingleOrder(_id)
  if(status === "success"){
    dispatch(setOrder(order))
    }
}