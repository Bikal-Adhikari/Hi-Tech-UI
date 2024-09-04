import { createNewContactRequest } from "./contactAxios";

export const createNewContactAction = async (contact) => {
  const { status } = await createNewContactRequest(contact);
  return status;
};
