import { SET_FOOD_CATEGORIES } from "./types/foodCategoriesTypes";


const initialState = null;

const foodCategoriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FOOD_CATEGORIES:
      return [...payload];

    default:
      return state;
  }
};

export default foodCategoriesReducer;