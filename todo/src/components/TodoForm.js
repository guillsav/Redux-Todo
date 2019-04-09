import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

import './TodoForm.css';

class TodoForm extends Component {
  state = {
    task: '',
    errors: {}
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const todo = this.props.todos.filter(todo => todo.task === this.state.task);
    const task = todo.map(({task}) => task).toString();

    // Check if task input field is empty
    if (this.state.task === '') {
      return this.setState({
        errors: {task: 'Text field is empty!'}
      });
    } else if (
      task.toLowerCase() !== this.state.task &&
      task !== this.state.task.toUpperCase()
    ) {
      // Check if the new task already exist in the state
      this.props.addTodo(this.state.task);
      this.setState({
        task: '',
        errors: {}
      });
    } else {
      return this.setState({
        errors: {task: 'This task already exsit!'}
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onFormSubmit} className="TodoForm">
          <div className="form-item">
            <input
              className={`${this.state.errors.task ? 'error-on' : ''}`}
              onChange={this.onInputChange}
              type="text"
              name="task"
              value={this.state.task}
              placeholder="Add new task..."
              error={this.state.errors.task}
            />
            <input type="submit" value="Add" />
          </div>
          {this.state.errors.task && (
            <div className="error-feedback">{this.state.errors.task}</div>
          )}
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({todos: state.todos});

export default connect(
  mapStateToProps,
  {addTodo}
)(TodoForm);
