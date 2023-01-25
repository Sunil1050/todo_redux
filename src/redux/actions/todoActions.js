import { ActionTypes } from "../constants/action-types";

export const addTodos = (todos) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: todos,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: todo,
  };
}

export const completeTodo = (boolean, id) => {
  return {
    type: ActionTypes.COMPLETE_TODO,
    payload: {checkedStatus: boolean, id},
  };
}
