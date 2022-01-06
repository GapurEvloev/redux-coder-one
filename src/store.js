import { createStore, combineReducers } from "redux";
import homePage from "./containers/HomePage/redusers";
import userPage from './containers/UserPage/redusers'

const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);