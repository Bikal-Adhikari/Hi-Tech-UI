import { apiProcessor } from "../../services/axios";
const paymentEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/payment";

export const getPaymentKey = () => {
  const obj = {
    url: paymentEP + "/config",
    method: "get",
    isPrivate: true,
  };

  return apiProcessor(obj);
};
export const postPaymentIntent = (amount) => {
  const obj = {
    url: paymentEP + "/create-payment-intent",
    method: "post",
    data:{
      amount: amount,
    },
    isPrivate: true,
  };

  return apiProcessor(obj);
};
