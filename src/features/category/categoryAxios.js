import { apiProcessor } from "../../services/axios";
const categoryEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/categories";

export const fetchAllCategory = () => {
  const obj = {
    url: categoryEP,
    method: "get",
    data: { status: "active" },
  };

  return apiProcessor(obj);
};
export const fetchACategory = (_id) => {
  const obj = {
    url: `${categoryEP}/${_id}`,
    method: "get",
    data: { status: "active" },
  };

  return apiProcessor(obj);
};
