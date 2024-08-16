import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import { fetchProductAction } from "../../features/products/productAction";
import { fetchCategoryAction } from "../../features/category/categoryAction";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const { category } = useSelector((state) => state.categoryInfo);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProductAction());
    dispatch(fetchCategoryAction());
  }, [dispatch]);

  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  // Filter products based on search input
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      category.some((cat) =>
        cat.name.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Limit products to display 3 per category
  const categoryDisplayLimit = 3;
  const limitedProducts = category.reduce((acc, cat) => {
    acc[cat._id] = filteredProducts
      .filter((product) => product.category === cat._id)
      .slice(0, categoryDisplayLimit);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1 className="text-center mb-4">Our Products</h1>
        <InputGroup className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search products or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-secondary">Search</Button>
        </InputGroup>
        <hr />
        {category.map((cat) => (
          <div key={cat._id} className="mb-5">
            <h2 className="mb-4">
              <Link
                to={`/category/${cat._id}`}
                className="text-decoration-none text-dark"
              >
                {cat.name}
              </Link>
            </h2>
            <Row>
              {limitedProducts[cat._id]?.map((product) => (
                <Col md={4} key={product._id} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={`${imgEp}/${product.thumbnail}` || "placeholder.jpg"}
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>
                        <Link
                          to={`/product/${product._id}`}
                          className="text-decoration-none text-dark"
                        >
                          {product.name}
                        </Link>
                      </Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text className="text-success">
                        ${product.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
