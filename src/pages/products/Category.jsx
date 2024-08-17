import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductAction } from "../../features/products/productAction";
import { Container, Row, Col } from "react-bootstrap";
import { fetchSingleCategoryAction } from "../../features/category/categoryAction";

import MainComponent from "../../components/cart/MainComponent";

const CategoryPage = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const { cat } = useSelector((state) => state.categoryInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  useEffect(() => {
    dispatch(fetchProductAction());
    if (!cat || cat._id !== _id) {
      dispatch(fetchSingleCategoryAction(_id));
    }
  }, [dispatch, _id, cat]);

  // Ensure the category is loaded before filtering products
  if (!cat) {
    return <p>Loading category...</p>;
  }

  const categoryProducts = products.filter(
    (product) => product.parentCatId === _id
  );
  console.log(categoryProducts);

  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">{cat.title}</h1>
        <Row>
          {categoryProducts.length === 0 ? (
            <Col className="text-center">
              <p>No products available in this category.</p>
            </Col>
          ) : (
            categoryProducts?.map((product) => (
              <div key={product._id} className="mb-5">
                <MainComponent products={product} />
              </div>
            ))
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryPage;
