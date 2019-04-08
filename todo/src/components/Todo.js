import React from 'react';

const Todo = props => {
  return (
    <div className="Todo">
      <h4>{props.todo.task}</h4>
    </div>
  );
};

export default Todo;
