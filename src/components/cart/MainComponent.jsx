import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import ProductCard from "../product-card/ProductCard";
import SideMenu from "./SideMenu";

const MainComponent = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartInfo.items); // Get cart items from Redux store

  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        img: `${imgPath}/${product.thumbnail}`,
        salesPrice: product.salesPrice,
        quantity: 1,
      })
    );
  };

  return (
    <div>
      <ProductCard onAddToCart={handleAddToCart} products={products} />
      <SideMenu
        cartItems={Array.isArray(cartItems) ? cartItems : [cartItems]}
      />
      {/* Always render SideMenu */}
    </div>
  );
};

export default MainComponent;
