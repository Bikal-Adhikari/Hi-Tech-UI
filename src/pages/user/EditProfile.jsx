import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { Link, useParams } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { useEffect } from "react";
import {
  editUserProfileAction,
  fetchSingleUserProfileAction,
} from "../../features/users/userAction";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/custom-input/CustomInput";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  const { user } = useSelector((state) => state.userInfo);
  const { form, handleOnChange, setForm } = useForm({ user });

  useEffect(() => {
    if (_id !== form?._id) {
      dispatch(fetchSingleUserProfileAction(_id));
      user?._id && setForm(user);
    }
  }, [dispatch, _id, user, setForm, form]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, role, email, ...rest } = form;

    if (window.confirm("Are you sure you want to make this changes?")) {
      dispatch(editUserProfileAction(rest));
    }
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Write your first name",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Write your last name",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "041345678",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "email@email.com",
      disabled: true,
    },
    {
      label: "Gender",
      name: "gender",
      type: "text",
      required: true,
      placeholder: "Gender",
      disabled: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "Enter your current password",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      required: false,
      placeholder: "Enter your address",
    },
    {
      label: "Bio",
      name: "bio",
      type: "textarea",
      required: false,
      placeholder: "Write a short bio",
    },
  ];

  return (
    <div>
      <Header />
      <h4 className="py-4">Profile Update</h4>
      <Link to="/Userprofile">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Form onSubmit={handleOnSubmit}>
        {inputs?.map((input, i) => (
          <CustomInput
            key={i}
            {...input}
            onChange={handleOnChange}
            value={form[input.name] || ""}
          />
        ))}
        <div className="d-grid mt-3">
          <Button type="submit">Update your Profile</Button>
        </div>
      </Form>
      <Footer />
    </div>
  );
};

export default EditProfile;
