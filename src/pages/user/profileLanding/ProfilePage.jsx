import { useState } from "react";
import { Row, Col, Button, Modal, Form, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editUserProfileAction } from "../../../features/users/userAction";
import { Header } from "../../../components/layout/Header/Header";
import { Footer } from "../../../components/layout/Footer/Footer";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserProfileAction(formData));
    handleClose();
  };

  return (
    <div>
      <Header />
      {/* <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header as="h5">User Profile</Card.Header>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Phone: {user.phone}</Card.Text>
              <Button variant="primary" onClick={handleShow}>
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <Row className="my-4">
        <Col md={4} className="text-center">
          <Image
            src="path/to/profile-picture.jpg"
            roundedCircle
            fluid
            style={{ maxHeight: "300px", maxWidth: "300px" }}
          />
          <h2 className="mt-3">{`${user.fName} ${user.lName}`}</h2>
          <Button variant="outline-secondary" className="mt-2">
            Add Profile Picture
          </Button>
        </Col>
        <Col md={8}>
          <Row>
            <Col xs={12} className="mb-2">
              <strong>Status: </strong>
              {user.status}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Role: </strong>
              {user.role}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Phone: </strong>
              {user.phone}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Gender: </strong>
              {user.gender}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Email: </strong>
              {user.email}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Email Verified: </strong>
              {user.isEmailVerified ? "Yes" : "No"}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Account Created: </strong>
              {new Date(user.createdAt).toLocaleString()}
            </Col>
            <Col xs={12} className="mb-2">
              <strong>Last Updated: </strong>
              {new Date(user.updatedAt).toLocaleString()}
            </Col>
            {user.address && (
              <Col xs={12} className="mb-2">
                <strong>Address: </strong>
                {user.address}
              </Col>
            )}
            {user.bio && (
              <Col xs={12} className="mb-2">
                <strong>Bio: </strong>
                {user.bio}
              </Col>
            )}
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="text-center">
              <Button
                variant="primary"
                as={Link}
                to={`/edit-profile/${user._id}`}
                className="me-2"
              >
                Edit Profile
              </Button>
              <Button
                variant="secondary"
                as={Link}
                to={`/change-password/${user._id}`}
              >
                Change Password
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ProfilePage;
