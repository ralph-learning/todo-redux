import { combineReducers } from 'redux';
export const ADD_TODO = 'ADD_TODO';
export const CHANGE_INPUT = 'CHANGE_INPUT';

const todos = (state = ['pegar'], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

const newTodo = (state = '', action) => {
  switch(action.type) {
    case CHANGE_INPUT:
      return action.payload
    default:
      return state
  }
}

export const reducers = combineReducers({
  todos,
  newTodo,
});

