import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { loginUserAction } from "../../features/users/userAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);

  const redirectTo = location?.state?.from?.pathname || "/";
  useEffect(() => {
    user?._id && navigate(redirectTo);
  }, [user?._id, navigate, redirectTo]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      return toast.error("Must have email and password filled");
    }

    //call server to process the authentication
    dispatch(loginUserAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
      forwardRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      forwardRef: passwordRef,
    },
  ];

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="" style={{ width: "450px" }}>
          <Form
            className="shadow-lg p-3 rounded  bg-light"
            onSubmit={handleOnSubmit}
          >
            <h3 className="text-center">Admin Login</h3>
            <hr />
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} />
            ))}

            <div className="d-grid mt-3">
              <div className="text-start pb-1">
                Forget password ? {""}
                <a href="/forget-password">Reset Now</a>
              </div>
              <Button type="submit"> Login Now</Button>
            </div>
            <div className="text-end pb-1">
              Don't have an account? {""}
              <a href="/signUp">Create Now</a>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
