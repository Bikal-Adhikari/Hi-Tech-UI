import { createNewService } from "./serviceAxios";

export const createNewServiceAction = async (service) => {
  const { status } = await createNewService(service);
  return status;
};
