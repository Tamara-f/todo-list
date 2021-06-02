import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
  },
}));

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const setUpdate = createAction('todos/setUpdate', (id, text) => ({
  payload: {
    id,
    text,
  },
}));

export default { addTodo, deleteTodo, changeFilter, setUpdate };
