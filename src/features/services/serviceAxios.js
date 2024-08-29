import { apiProcessor } from "../../services/axios";
const serviceEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/services";

export const createNewService = (service) => {
  const obj = {
    url: serviceEP,
    method: "post",
    data: service,
  };

  return apiProcessor(obj);
};
