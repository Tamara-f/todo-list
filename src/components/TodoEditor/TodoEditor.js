import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import './TodoEditor.scss';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onSubmit(this.state.message);
      this.setState({ message: '' });
      return;
    }

    alert('Add task text');
  };

  render() {
    return (
      <>
        <h1>Todo list</h1>
        <form className="TodoEditor" onSubmit={this.handleSubmit}>
          <textarea
            className="TodoEditor__textarea"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit" className="TodoEditor__button">
            Add new task
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosActions.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
