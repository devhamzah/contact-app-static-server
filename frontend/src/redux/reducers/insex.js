import { combineReducers } from "redux";

import contactReducer from "./constactReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
    contactReducer,
    uiReducer
});