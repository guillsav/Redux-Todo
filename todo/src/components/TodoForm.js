import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class TodoForm extends Component {
  state = {
    task: ''
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="TodoForm">
        <input
          required
          onChange={this.onInputChange}
          type="text"
          name="task"
          value={this.state.task}
          placeholder="Add new task..."
        />
        <input type="submit" value="Add new task" />
      </form>
    );
  }
}

export default connect(
  null,
  {addTodo}
)(TodoForm);
