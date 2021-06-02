import React from 'react';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/TodoFilter';
import { useSelector } from 'react-redux';

const App = () => {
  const todos = useSelector(state => state.todos.items);

  return (
    <>
      <TodoEditor />
      {todos.length > 0 && <Filter />}
      <TodoList />
    </>
  );
};

export default App;
