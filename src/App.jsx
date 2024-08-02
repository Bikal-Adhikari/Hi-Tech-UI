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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
