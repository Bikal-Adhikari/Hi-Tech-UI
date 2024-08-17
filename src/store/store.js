import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import productReducer from "../features/products/productSlice";
import categoryReducer from "../features/category/categorySlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    productInfo: productReducer,
    categoryInfo: categoryReducer,
    cartInfo: cartReducer,
  },
});
