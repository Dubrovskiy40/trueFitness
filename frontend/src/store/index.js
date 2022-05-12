import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";
import { userData } from "./userData"
import surveyDataReducer from "./surveyDataReducer";
import foodReducer from "./foodReducer";
import favoritesReducer from "./favoritesReducer";
import trainingsReducer from "./trainingsReducer"

const rootReducer = combineReducers({
    user,
    food: foodReducer,
    favorites: favoritesReducer,
    userData,
    surveyDataReducer,
    trainingsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));