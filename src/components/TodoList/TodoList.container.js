import { connect } from 'react-redux';
import todosActions from '../../redux/todos/todos-actions';
import TodoList from './TodoList';

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onSetUpdate: (id, text) => dispatch(todosActions.setUpdate(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
