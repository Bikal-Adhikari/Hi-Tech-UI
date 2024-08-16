import { fetchACategory, fetchAllCategory } from "./categoryAxios";
import { setCat, setCategory } from "./categorySlice";


export const fetchCategoryAction = () => async (dispatch) => {
  const { status, categories } = await fetchAllCategory();

  if (status === "success") {
    dispatch(setCategory(categories));
  }
};
export const fetchSingleCategoryAction = (_id) => async (dispatch) => {
  const { status, category } = await fetchACategory(_id);

  if (status === "success") {
    dispatch(setCat(category));
  }
};
