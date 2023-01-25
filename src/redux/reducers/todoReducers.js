import { ActionTypes } from "../constants/action-types";
const intialState = {
  todos: [],
};

export const todosReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, payload]};
    case ActionTypes.DELETE_TODO:
      return {...state, todos: state.todos.filter(item => item.id !== payload)}
    case ActionTypes.COMPLETE_TODO:
      return {...state, todos: state.todos.map(item => {
        if (item.id === payload.id) {
          return {...item, isChecked: !payload.checkedStatus}
        }
        return item
      })}
    default:
      return state;
  }
};