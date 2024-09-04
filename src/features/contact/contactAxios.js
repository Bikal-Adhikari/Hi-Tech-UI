import { apiProcessor } from "../../services/axios";
const contactEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/contact";

export const createNewContactRequest = (contact) => {
  const obj = {
    url: contactEP,
    method: "post",
    data: contact,
    showToast: true,
  };

  return apiProcessor(obj);
};
