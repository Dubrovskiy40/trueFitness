import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";
import { userData } from "./userData"
import surveyDataReducer from "./surveyDataReducer";
import foodReducer from "./foodReducer";
import favoritesReducer from "./favoritesReducer";
import trainingsReducer from "./trainingsReducer"
import foodCategoriesReducer from "./foodCategoriesReducer";

const rootReducer = combineReducers({
    user,
    foodReducer,
    favorites: favoritesReducer,
    userData,
    surveyDataReducer,
    trainingsReducer,
    foodCategoriesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));