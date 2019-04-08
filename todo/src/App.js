import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoList from './components/TodoList';
import TodoForm from './/components/TodoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todos</h2>
        <TodoForm />
        {this.props.todos.map((todo, index) => (
          <TodoList key={index} todo={todo} />
        ))}
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
  {}
)(App);
