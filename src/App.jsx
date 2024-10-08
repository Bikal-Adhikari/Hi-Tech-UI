import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing page/Landing";
import ErrorPage from "./pages/error page/ErrorPage";
import SignUp from "./pages/user/SignUp";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/user/SignIn";
import ProfileLanding from "./pages/user/profileLanding/ProfileLanding";
import Cart from "./pages/cart/Cart";
import ForgetPassword from "./pages/user/ForgetPassword";
import UserVerification from "./pages/user/UserVerification";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";
import Faq from "./pages/faq/Faq";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  autoLoginAction,
  fetchUserProfileAction,
} from "./features/users/userAction";
import Sales from "./pages/sale/Sales";
import ProfilePage from "./pages/user/profileLanding/ProfilePage";
import ChangePassword from "./pages/user/ChangePassword";
import EditProfile from "./pages/user/EditProfile";
import Products from "./pages/products/Products";
import CategoryPage from "./pages/products/Category";
import ProductPage from "./pages/products/ProductPage";
import Wishlist from "./pages/wishlist/Wishlist";
import Checkout from "./pages/checkout/Checkout";
import { Auth } from "./components/auth/auth";
import Payment from "./pages/payment/Payment";
import OrderConfirmation from "./pages/order/OrderConfirmation";
import OrderDetails from "./pages/order/OrderDetails";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLoginAction());
    dispatch(fetchUserProfileAction());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<ProfileLanding />} />
        <Route path="/Userprofile" element={<ProfilePage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/change-password/:_id" element={<ChangePassword />} />
        <Route path="/edit-profile/:_id" element={<EditProfile />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/sale" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:slug/:_id" element={<CategoryPage />} />
        <Route path="/product/:slug/:_id" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/checkout"
          element={
            <Auth>
              <Checkout />
            </Auth>
          }
        />
        <Route
          path="/payment"
          element={
            <Auth>
              <Payment />
            </Auth>
          }
        />
        <Route
          path="/order-confirmation"
          element={
            <Auth>
              <OrderConfirmation />
            </Auth>
          }
        />
        <Route
          path="/order-details/:_id"
          element={
            <Auth>
              <OrderDetails />
            </Auth>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
