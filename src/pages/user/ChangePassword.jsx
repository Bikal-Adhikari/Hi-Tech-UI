import { useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";
import { fetchSingleUserProfileAction } from "../../features/users/userAction";

const ChangePassword = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const { form, handleOnChange, setForm } = useForm({ user });

  useEffect(() => {
    if (_id !== form?._id) {
      dispatch(fetchSingleUserProfileAction(_id));
      user?._id && setForm(user);
    }
  }, [dispatch, _id, form, user, setForm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, oldPassword, newPassword, confirmNewPassword } = form;

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Implement password change logic here
    console.log({
      email,
      oldPassword,
      newPassword,
      confirmNewPassword,
    });
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      disabled: true,
    },
    {
      label: "Old Password",
      name: "oldPassword",
      type: "password",
      placeholder: "Enter your old password",
      required: true,
    },
    {
      label: "New Password",
      name: "newPassword",
      type: "password",
      placeholder: "Enter your new password",
      required: true,
    },
    {
      label: "Confirm New Password",
      name: "confirmNewPassword",
      type: "password",
      placeholder: "Confirm your new password",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <h4 className="py-4">Change Password</h4>
        <Link to="/Userprofile">
          <Button variant="secondary">&lt; Back</Button>
        </Link>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((input, i) => (
                <CustomInput
                  key={i}
                  {...input}
                  onChange={handleOnChange}
                  value={form[input.name] || ""}
                />
              ))}
              <div className="d-grid mt-3 mb-3">
                <Button type="submit">Change Password</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ChangePassword;
