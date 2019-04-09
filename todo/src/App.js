import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from './actions';

import TodoList from './components/TodoList';
import TodoForm from './/components/TodoForm';

import './App.css';

class App extends Component {
  getTodo = id => {
    const todo = this.props.todos.find(todo => {
      return todo.id === `${id}`;
    });

    this.props.toggleTodo(todo);
  };

  deleteTodo = id => {
    const todo = this.props.todos.find(todo => {
      return todo.id === `${id}`;
    });
    if (todo.completed) {
      this.props.deleteTodo(todo);
    }
  };
  render() {
    return (
      <div className="App">
        <h2>Todos</h2>
        <TodoForm />
        <TodoList
          deleteTodo={this.deleteTodo}
          todos={this.props.todos}
          getTodo={this.getTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {toggleTodo, deleteTodo}
)(App);
