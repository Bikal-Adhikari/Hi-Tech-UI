import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
import categoryReducer from "../features/category/categorySlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    productInfo: productReducer,
    categoryInfo: categoryReducer,
  },
});
