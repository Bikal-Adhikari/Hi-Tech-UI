import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const ChangePassword = () => {
  const { _id } = useParams();
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div>
      <Header />
      <h4 className="py-4">Change Password</h4>
      <Link to="/Userprofile">
        <Button variant="secondary">&lt; Back</Button>
      </Link>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <CustomInput
              label="Old Password"
              type="password"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />

            <CustomInput
              label="New Password"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <CustomInput
              label="Confirm New Password"
              type="password"
              placeholder="Confirm your new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />

            <Button variant="primary" type="submit" className="w-100">
              Change Password
            </Button>
          </form>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ChangePassword;
