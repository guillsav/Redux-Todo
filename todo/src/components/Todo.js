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
        <div onClick={() => this.selectTodo(this.props.id)} className="task">
          <h4 className={`${!this.props.completed ? '' : 'done'}`}>
            {this.props.task.toUpperCase()}
          </h4>
        </div>
        <button onClick={() => this.deleteTodo(this.props.id)}>
          <i className="far fa-trash-alt fa-lg" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(
  mapStateToProps,
  {toggleTodo, deleteTodo}
)(Todo);
