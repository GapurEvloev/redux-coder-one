import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/redusers";

const reducers = combineReducers({ homePage });

export default createStore(reducers);