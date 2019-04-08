import {ADD_TODO, TOGGLE_TODO} from '../actions';

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
        todos: [...state.todos, action.payload]
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

    default:
      return state;
  }
};

export default reducer;
