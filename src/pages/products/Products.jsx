import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect, useState } from "react";
import { fetchProductAction } from "../../features/products/productAction";
import { fetchCategoryAction } from "../../features/category/categoryAction";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import MainComponent from "../../components/cart/MainComponent";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const { category } = useSelector((state) => state.categoryInfo);

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("name"); // Initial sort option

  useEffect(() => {
    dispatch(fetchProductAction());
    dispatch(fetchCategoryAction());
  }, [dispatch]);

  const imgPath = import.meta.env.VITE_APP_ADMINSERVER_ROOT;

  // Ensure category and products are defined before using them
  const categoryList = category || [];
  const productList = products || [];

  // Filter products based on search input
  const filteredProducts = productList.filter(
    (product) =>
      product.name?.toLowerCase().includes(search.toLowerCase()) ||
      categoryList.some((cat) =>
        cat.name?.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Sorting logic
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // Limit products to display 3 per category
  const categoryDisplayLimit = 3;
  const categorizedProducts = categoryList.reduce((acc, cat) => {
    const productsInCategory = sortedProducts.filter(
      (product) => product.parentCatId === cat._id
    );
    acc[cat._id] = productsInCategory.slice(0, categoryDisplayLimit);
    return acc;
  }, {});

  const handleSortChange = (option) => {
    setSortOption(option);
  };

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
          <Button
            variant="outline-secondary"
            disabled={filteredProducts.length === 0}
          >
            {filteredProducts.length === 0 ? "No Results" : "Search"}
          </Button>
          <Form.Select
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="ms-2"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </Form.Select>
        </InputGroup>
        <hr />
        {categoryList.length === 0 && productList.length === 0 ? (
          <p className="text-center">No products or categories available.</p>
        ) : (
          categoryList.map((cat) => (
            <div key={cat._id} className="mb-5">
              <h2 className="mb-4">
                <Link
                  to={`/category/${cat.slug}/${cat._id}`}
                  className="text-decoration-none text-dark"
                >
                  {cat.title}
                </Link>
              </h2>
              <MainComponent products={categorizedProducts[cat._id] || []} />
            </div>
          ))
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default Products;
