import { useEffect } from "react";
import { Row, Col, Button, Image, Tab, Tabs, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../../components/layout/Header/Header";
import { Footer } from "../../../components/layout/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchSingleUserProfileAction,
  updateUserProfilePicAction,
} from "../../../features/users/userAction";
import useForm from "../../../Hooks/useForm";
import ProfilePicUploader from "../../../components/common/custom-modal/ProfilePicUploader";
import { fetchOrderAction } from "../../../features/order/orderAction";

const userEp = import.meta.env.VITE_APP_SERVER_ROOT;

const ProfilePage = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { orders } = useSelector((state) => state.orderInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, setForm, setImages } = useForm({ user });

  useEffect(() => {
    // Fetch user data from API
    if (user?._id === form?._id) {
      dispatch(fetchSingleUserProfileAction(user._id));
    }
  }, [dispatch, user, form]);

  useEffect(() => {
    // Fetch user orders
    if (user?._id) {
      dispatch(fetchOrderAction(user._id));
    }
  }, [dispatch, user]);

  const handleProfilePicUpload = (file) => {
    const formData = new FormData();
    formData.append("profilePic", file);

    dispatch(updateUserProfilePicAction(user._id, formData));
  };

  // Filter active orders only
  const activeOrders = orders.filter((order) => order.status === "active");

  // Filter recent active orders (within the last 10 days)
  const currentDate = new Date();
  const trackOrders = activeOrders.filter(
    (order) =>
      new Date(order.createdAt) >=
      new Date(currentDate.setDate(currentDate.getDate() - 10))
  );

  // Filter older active orders (more than 10 days old)
  const orderHistory = activeOrders.filter(
    (order) =>
      new Date(order.createdAt) <
      new Date(currentDate.setDate(currentDate.getDate() - 10))
  );

  const handleViewDetails = (orderId) => {
    // Redirect to the order details page
    navigate(`/order-details/${orderId}`);
  };

  return (
    <div>
      <Header />
      <main className="m-vh-100 pt-10">
        <Row className="my-4">
          <Col md={4} className="text-center">
            {/* Display user's profile picture if it exists, otherwise show a placeholder */}
            <Image
              src={
                `${userEp}/${user?.profilePic}` ||
                "path/to/default-placeholder.jpg"
              }
              roundedCircle
              fluid
              style={{ maxHeight: "300px", maxWidth: "300px" }}
            />
            <h2 className="mt-3">{`${user.fName} ${user.lName}`}</h2>

            <ProfilePicUploader
              onUpload={handleProfilePicUpload}
              buttonText={
                user.profilePic
                  ? "Change Profile Picture"
                  : "Add Profile Picture"
              }
            />
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
        <Row>
          <Tabs
            defaultActiveKey="Track your orders"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Track your orders" title="Track your orders">
              {trackOrders.length > 0 ? (
                <Container>
                  <Row>
                    {trackOrders.map((order) => (
                      <Col key={order._id} md={12} className="mb-3">
                        <div className="order-item">
                          <h5>Order ID: {order._id}</h5>
                          <p>Status: {order.status}</p>
                          <p>
                            Ordered At:{" "}
                            {new Date(order.createdAt).toLocaleString()}
                          </p>
                          {/* Add "View Details" button */}
                          <Button
                            variant="info"
                            onClick={() => handleViewDetails(order._id)}
                          >
                            View Details
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              ) : (
                <p>No active orders to track.</p>
              )}
            </Tab>

            <Tab eventKey="Order History" title="Order History">
              {orderHistory.length > 0 ? (
                <Container>
                  <Row>
                    {orderHistory.map((order) => (
                      <Col key={order._id} md={12} className="mb-3">
                        <div className="order-item">
                          <h5>Order ID: {order._id}</h5>
                          <p>Status: {order.status}</p>
                          <p>
                            Ordered At:{" "}
                            {new Date(order.createdAt).toLocaleString()}
                          </p>
                          {/* Add "View Details" button */}
                          <Button
                            variant="info"
                            onClick={() => handleViewDetails(order._id)}
                          >
                            View Details
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Container>
              ) : (
                <p>No past active orders found.</p>
              )}
            </Tab>
          </Tabs>
        </Row>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
