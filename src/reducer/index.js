import { combineReducers } from "redux";
import todos from "./todo";
import VisibleFilter from "./VisibleFilter";

export default combineReducers({
  todos,
  VisibleFilter,
});
