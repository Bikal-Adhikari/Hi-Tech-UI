import { toast } from "react-toastify";
import {
  editUserProfile,
  fetchUserProfile,
  getNewAccessJWT,
  logoutUser,
  postNewUser,
  userLogin,
  verifyUserLink,
} from "./userAxios";
import { setUser } from "./userSlice";

const apiProcessWithToast = async (obj, func) => {
  const pending = func(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const response = await pending;
  toast[response.status](response.message);
  return response;
};
