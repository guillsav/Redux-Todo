import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions';

import './App.css';

class App extends Component {
  addNewTodo = e => {
    e.preventDefault();
  };

  render() {
    return <div className="App">App</div>;
  }
}

const mapStateToProp = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProp,
  {addTodo}
)(App);
