import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import { useEffect } from "react";
import { fetchProductAction } from "../../features/products/productAction";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const imgEp = import.meta.env.VITE_APP_ADMINSERVER_ROOT;
  useEffect(() => {
    dispatch(fetchProductAction());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <main className="container my-5">
        <h1 className="text-center mb-4">Our Products</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`${imgEp}/${product.thumbnail}` || "placeholder.jpg"}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-success">${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
