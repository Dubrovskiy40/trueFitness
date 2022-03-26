import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import user from "./user";
import food from "./food";

const rootReducer = combineReducers({
    user,
    food,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));