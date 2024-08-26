import { apiProcessor } from "../../services/axios";
const orderEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/order";

export const fetchAllOrders = (userId) => {
  const obj = {
    url: orderEP,
    method: "get",
    userId: userId,
  };

  return apiProcessor(obj);
};
export const addNewOrder = (orderData) => {
  const obj = {
    url: orderEP,
    method: "post",
    data: orderData,
  };

  return apiProcessor(obj);
};
