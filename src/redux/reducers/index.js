import { combineReducers } from "redux";
import { todosReducer } from "./todoReducers";
const reducers = combineReducers({
  allTodos: todosReducer
});
export default reducers;
