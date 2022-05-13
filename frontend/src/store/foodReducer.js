import { SET_FOOD } from "./types/foodTypes";

const initialState = null;

const foodReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FOOD:
            return payload;

        default:
            return state;
    }
};

export default foodReducer;