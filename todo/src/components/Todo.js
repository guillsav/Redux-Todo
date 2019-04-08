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
    </div>
  );
};

export default Todo;
