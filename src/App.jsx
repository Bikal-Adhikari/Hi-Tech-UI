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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profile" element={<ProfileLanding />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
