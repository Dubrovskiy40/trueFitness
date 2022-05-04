import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";
import { userData } from "./userData"
import surveyDataReducer from "./surveyDataReducer";
import foodReducer from "./food";
import favoritesReducer from "./favorites";

const rootReducer = combineReducers({
    user,
    food: foodReducer,
    favorites: favoritesReducer,
    userData,
    surveyDataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));