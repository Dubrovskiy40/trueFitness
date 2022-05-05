import {SET_FAVORITES} from "./types/favoritesTypes";

const initialState = null;

const favoritesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FAVORITES:
            return [...payload];

        default:
            return state;
    }
};

export default favoritesReducer;