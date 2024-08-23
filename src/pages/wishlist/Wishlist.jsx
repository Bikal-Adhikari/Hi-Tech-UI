// Wishlist.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer/Footer";

const Wishlist = () => {
  const { favourites } = useSelector((state) => state.favouriteInfo) || {
    favourites: [],
  };
  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  return (
    <div>
      <Header />

      <Container className="container mt-5 vh-100">
        <h2>Your Wishlist</h2>
        <hr />
        {favourites.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="row">
            {favourites.map((product) => (
              <div key={product._id} className="col-md-4">
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    src={`${imgPath}/${product.thumbnail}` || "placeholder.jpg"}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.salesPrice ? (
                        <>
                          <span className="text-danger">
                            <del>${product.price}</del>
                          </span>
                          <br />
                          <span className="text-success fw-bold">
                            Now: ${product.price - product.salesPrice}
                          </span>
                        </>
                      ) : (
                        <span className="text-dark">
                          Price: ${product.price}
                        </span>
                      )}
                    </Card.Text>
                    <Link to={`/product/${product.slug}/${product._id}`}>
                      <Button variant="primary">View Product</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Wishlist;
