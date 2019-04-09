import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions';

const initialState = {
  todos: [
    {
      id: 'r2452545325',
      task: 'Walk the dog',
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            task: action.payload,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {...todo, completed: !action.payload.completed};
          }
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          if (todo.completed) {
            return todo.completed !== action.payload.completed;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export default reducer;
