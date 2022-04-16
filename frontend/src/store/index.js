import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";
import food from "./food";
import { userData } from "./userData"
import surveyDataReducer from "./surveyDataReducer";

const rootReducer = combineReducers({
    user,
    food,
    userData,
    surveyDataReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));