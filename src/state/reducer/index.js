import { combineReducers } from "redux";
import varReducer from "./varReducer";

export default combineReducers({
  variables: varReducer,
});
