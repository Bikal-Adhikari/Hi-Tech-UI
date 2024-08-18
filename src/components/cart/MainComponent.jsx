import { useDispatch, useSelector } from "react-redux";
import SideMenu from "./SideMenu";

import ProductCard from "../product-card/ProductCard";
import { useState } from "react";
import { addToCart } from "../../features/cart/cartSlice";

const MainComponent = ({ products }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartInfo);
  console.log(cartItems);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        _id: product._id,
        quantity: 1,
      })
    );
    setIsSideMenuOpen(true);
  };

  const handleCloseSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <div>
      <ProductCard onAddToCart={handleAddToCart} products={products} />

      {isSideMenuOpen && (
        <SideMenu
          cartItems={Array.isArray(cartItems) ? cartItems : [cartItems]}
          onClose={handleCloseSideMenu}
        />
      )}
    </div>
  );
};

export default MainComponent;
