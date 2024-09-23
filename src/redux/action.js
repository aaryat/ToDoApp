import { ADD_TODO, DELETE_TODO, UPDATE_TODO, MARK_AS_DONE } from './actionTypes';

export const addTodo = (task) => {
  return{
    type:ADD_TODO,
    payload:task
  }
};

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo
});

export const markAsDone = (id) => ({
    type: MARK_AS_DONE,
    payload: id,
});