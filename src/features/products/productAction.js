import { fetchAllProducts, fetchAProduct } from "./productAxios";
import { setProd, setProducts } from "./productSlice";

export const fetchProductAction = () => async (dispatch) => {
  const { status, products } = await fetchAllProducts();

  if (status === "success") {
    dispatch(setProducts(products));
  }
};
export const fetchSingleProductAction = (_id) => async (dispatch) => {
  const { status, product } = await fetchAProduct(_id);

  if (status === "success") {
    dispatch(setProd(product));
  }
};
