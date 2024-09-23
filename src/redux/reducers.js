import { ADD_TODO, DELETE_TODO, UPDATE_TODO, MARK_AS_DONE } from './actionTypes';

const initialState = {
  todoList: [],
  doneList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList]
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload)
      };

    case UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };

      case MARK_AS_DONE:
        const todoToMove = state.todoList.find(todo => todo.id === action.payload);
        if (!todoToMove) {
            return state; 
        }
        return {
            ...state,
            todoList: state.todoList.filter(todo => todo.id !== action.payload),
            doneList: [todoToMove, ...state.doneList],
        };

    default:
      return state;
  }
};

export default todoReducer;
