import { useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/product-card/ProductCard";
import MainComponent from "../../components/cart/MainComponent";

const Sales = () => {
  const { products } = useSelector((state) => state.productInfo);

  const productsOnSale = products.filter((item) => item.salesPrice > 1);
  return (
    <div>
      <Header />
      <main className="my-5">
        <Container>
          <h2 className="mb-4">Products on Sale</h2>
          <Row>
            {productsOnSale.length > 0 ? (
              productsOnSale.map((item) => (
                <div key={item._id} className="mb-5">
                  <MainComponent products={item} />
                </div>
              ))
            ) : (
              <Col>
                <p>No products on sale at the moment.</p>
              </Col>
            )}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Sales;
