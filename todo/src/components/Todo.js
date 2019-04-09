import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../actions';

import './todo.css';

class Todo extends React.Component {
  selectTodo = id => {
    const todo = this.props.todos.find(todo => todo.id === id);
    this.props.toggleTodo(todo);
  };

  deleteTodo = id => {
    const todo = this.props.todos.find(todo => todo.completed === true);
    this.props.deleteTodo(todo);
  };
  render() {
    return (
      <div className="Todo">
        <h4
          onClick={() => this.selectTodo(this.props.id)}
          className={`${!this.props.completed ? '' : 'done'}`}
        >
          {this.props.task}
        </h4>
        <button onClick={() => this.deleteTodo(this.props.id)}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(
  mapStateToProps,
  {toggleTodo, deleteTodo}
)(Todo);
