import React from 'react';

import './todo.css';

const Todo = props => {
  return (
    <div className="Todo">
      <h4
        onClick={() => props.getTodo(props.id)}
        className={`${!props.completed ? '' : 'done'}`}
      >
        {props.task}
      </h4>
      <button onClick={() => props.deleteTodo(props.id)}>Remove</button>
    </div>
  );
};

export default Todo;
