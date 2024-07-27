import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userAction";

export default configureStore({
  reducer: {
    userInfo: userReducer,
  },
});
