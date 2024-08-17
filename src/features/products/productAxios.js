import { apiProcessor } from "../../services/axios";
const productEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/products";

export const fetchAllProducts = () => {
  const obj = {
    url: productEP,
    method: "get",
    data: { status: "active" },
  };

  return apiProcessor(obj);
};
export const fetchAProduct = (_id) => {
  const obj = {
    url: `${productEP}/${_id}`,
    method: "get",
    data: { status: "active" },
  };

  return apiProcessor(obj);
};
