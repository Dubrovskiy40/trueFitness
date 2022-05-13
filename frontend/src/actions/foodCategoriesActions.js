import { SET_FOOD_CATEGORIES } from "../store/types/foodCategoriesTypes";

export const setFoodCategories = (data) => ({
  type: SET_FOOD_CATEGORIES,
  payload: data,
});

export const fetchFoodCategories = () => (dispatch) => {
  fetch("http://localhost:3001/foodCategories")
    .then((response) => response.json())
    .then((data) => dispatch(setFoodCategories(data)));
};