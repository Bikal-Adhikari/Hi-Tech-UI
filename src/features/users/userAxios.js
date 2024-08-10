import { apiProcessor } from "../../services/axios";
const userEP = import.meta.env.VITE_APP_SERVER_ROOT + "/api/v1/users";

export const postNewUser = (data) => {
  const obj = {
    url: userEP,
    method: "post",
    data,
    // isPrivate: true
  };

  return apiProcessor(obj);
};

export const verifyUserLink = (data) => {
  const obj = {
    url: userEP + "/user-verification",
    method: "post",
    data,
  };

  return apiProcessor(obj);
};

export const userLogin = (data) => {
  const obj = {
    url: userEP + "/login",
    method: "post",
    data,
    showToast: true,
  };

  return apiProcessor(obj);
};

export const fetchUserProfile = () => {
  const obj = {
    url: userEP,
    method: "get",
    isPrivate: true,
  };

  return apiProcessor(obj);
};
export const fetchSingleUserProfile = (_id) => {
  const obj = {
    url: `${userEP}/${_id}`,
    method: "get",
    // isPrivate: true,
  };

  return apiProcessor(obj);
};
export const editUserProfile = (userobj) => {
  const obj = {
    url: userEP + "/profile/update",
    method: "put",
    isPrivate: true,
    data: userobj,
    showToast: true,
  };

  return apiProcessor(obj);
};
export const getNewAccessJWT = () => {
  const obj = {
    url: userEP + "/new-accessjwt",
    method: "get",
    isPrivate: true,
    isRefreshJWT: true,
  };

  return apiProcessor(obj);
};

export const logoutUser = () => {
  const obj = {
    url: userEP + "/logout",
    method: "delete",
    isPrivate: true,
    showToast: true,
  };

  return apiProcessor(obj);
};
export const requestOTP = () => {
  const obj = {
    url: userEP + "/otp",
    method: "post",
  };

  return apiProcessor(obj);
};
export const resetPassword = (data) => {
  const obj = {
    url: userEP + "/password/reset",
    method: "patch",
    data,
  };

  return apiProcessor(obj);
};
export const changePassword = (data) => {
  const obj = {
    url: userEP + "/password/change",
    method: "patch",
    showToast: true,
    isPrivate: true,
    isRefreshJWT: true,
    data,
  };

  return apiProcessor(obj);
};
