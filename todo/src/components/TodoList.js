import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="Todolist">
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            task={todo.task}
            getTodo={props.getTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
