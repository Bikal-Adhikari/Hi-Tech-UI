
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "./SideMenu";
import { addToCart } from "../../features/cart/cartAction";
import ProductCard from "../product-card/ProductCard";
import { useState } from "react";

const MainComponent = ({ products }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartInfo);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
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
