import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoList from './components/TodoList';
import TodoForm from './/components/TodoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h2>Create a list of things to do:</h2>
          <TodoForm />
        </div>
        {this.props.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.props.todos} />
          </div>
        )}
      </React.Fragment>
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
