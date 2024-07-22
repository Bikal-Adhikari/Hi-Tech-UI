import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  CustomInput,
  CustomSelect,
} from "../../components/common/custom-input/CustomInput";
import useForm from "../../Hooks/useForm";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import PasswordRegex from "../../helpers/PasswordRegex";

const SignUp = () => {
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }
    console.log(rest);
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Enter your First Name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Enter your last Name",
    },
    {
      label: "phone",
      name: "phone",
      type: "number",
      placeholder: "0412345",
    },
    {
      label: "Gender",
      name: "gender",
      type: "text",
      isSelectType: true,
      required: true,
      options: [
        { label: "-- Select --", value: "" },
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "*******",
    },
  ];

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100  ">
        <div className="" style={{ width: "450px" }}>
          <Form className="shadow-lg p-3 rounded  " onSubmit={handleOnSubmit}>
            <h3>User Registration</h3>
            {inputs.map((item, i) => (
              <div key={i}>
                {item.isSelectType ? (
                  <CustomSelect {...item} onChange={handleOnChange} />
                ) : (
                  <CustomInput {...item} onChange={handleOnChange} />
                )}
                {item.name === "password" && (
                  <PasswordRegex password={form.password || ""} />
                )}
              </div>
            ))}

            <div className="d-grid">
              <Button type="submit">Register New User</Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
