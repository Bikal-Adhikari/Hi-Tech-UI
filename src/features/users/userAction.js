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

export const createNewUserAction = async (userData) => {
  apiProcessWithToast(userData, postNewUser);
  // further stuff
};

export const verifyUserLinkAction = async (data) => {
  return apiProcessWithToast(data, verifyUserLink);
};

export const loginUserAction = (data) => async (dispatch) => {
  const { status, jwts } = await userLogin(data);

  if (jwts?.accessJWT && jwts?.refreshJWT) {
    sessionStorage.setItem("accessJWT", jwts.accessJWT);
    localStorage.setItem("refreshJWT", jwts.refreshJWT);

    dispatch(fetchUserProfileAction());
  }

  //  if login success
};

export const fetchUserProfileAction = () => async (dispatch) => {
  const { status, userInfo } = await fetchUserProfile();

  if (status === "success") {
    //mount user in the redux store

    dispatch(setUser(userInfo));
  }
};
// export const editUserProfileAction = (userObj) => async (dispatch) => {
//   const { status, userInfo } = await editUserProfile(userObj);

//   if (status === "success") {
//     //mount user in the redux store

//     dispatch(setUser(userInfo));
//   }
// };

// export const autoLoginAction = () => async (dispatch) => {
//   const accessJWT = sessionStorage.getItem("accessJWT");

//   if (accessJWT) {
//     return dispatch(fetchUserProfileAction());
//   }
//   const refreshJWT = localStorage.getItem("refreshJWT");
//   if (refreshJWT) {
//     // get a new access jwt then call get user method
//     const response = await getNewAccessJWT();
//     if (response.status === "success") {
//       sessionStorage.setItem("accessJWT", response.accessJWT);
//       dispatch(fetchUserProfileAction());
//     }
//   }
// };

// export const logOutUserAction = () => async (dispatch) => {
//   // call api with authorization for backend logout
//   logoutUser();

//   // frontend logout
//   dispatch(setUser({}));
//   localStorage.removeItem("refreshJWT");
//   sessionStorage.removeItem("accessJWT");
// };
