import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="Todolist">
      <Todo todo={props.todo} />
    </div>
  );
};

export default TodoList;
