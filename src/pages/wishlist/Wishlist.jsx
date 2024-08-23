// Wishlist.jsx
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";
import MainComponent from "../../components/cart/MainComponent";

const Wishlist = () => {
  // Use useSelector to get the favourites array from the redux store
  const { favourites } = useSelector((state) => state.favouriteInfo) || {
    favourites: [],
  };

  return (
    <div>
      <Header />

      <Container className="container mt-5 vh-100">
        <h2>Your Wishlist</h2>
        <hr />
        {favourites.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <MainComponent products={favourites} /> // Pass favourites to MainComponent
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default Wishlist;
