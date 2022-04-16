import { SAVE_SURVEY_DATA, SET_SURVEY_DATA } from "./types/surveyTypes";

const initialState = null;

const surveyDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SURVEY_DATA:
      return state;
    case SAVE_SURVEY_DATA:
      return {
        ...state, ...payload
      }
    default:
      return state;
  }
};

export default surveyDataReducer;