import { apiProcessor } from "../../services/axios";
const paymentEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/payment";

export const getPaymentKey = (data) => {
  const obj = {
    url: paymentEP + "/config",
    method: "get",
    data,
    isPrivate: true,
  };

  return apiProcessor(obj);
};
