import { apiProcessor } from "../../services/axios";
const productEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/products";

export const fetchUserProfile = () => {
  const obj = {
    url: productEP,
    method: "get",
    status: "active",
  };

  return apiProcessor(obj);
};
