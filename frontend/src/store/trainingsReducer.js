import { SET_TRAININGS } from "./types/trainingsTypes";

const initialState = null;

const trainingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TRAININGS:
      return [...payload];

    default:
      return state;
  }
};

export default trainingsReducer;