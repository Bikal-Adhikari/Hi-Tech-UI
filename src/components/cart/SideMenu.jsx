import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "./sidemenu.css";


const SideMenu = ({ cartItems, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(
      updateCartItem({
        id,
        quantity,
        price: cartItems.find((item) => item._id === id).price,
      })
    );
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="side-menu">
      <div className="side-menu-content">
        <Button className="close-btn" onClick={onClose}>
          X
        </Button>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.img} alt={item.name} className="item-img" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <Form.Select
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item._id, +e.target.value)
                  }
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </Form.Select>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  Remove
                </Button>
              </div>
              <p className="item-total">${item.totalPrice}</p>
            </div>
          ))
        )}
        <hr />
        <div className="cart-summary">
          <p>Total: ${totalPrice}</p>
          <Button variant="success" className="w-100">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
