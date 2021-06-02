import React from 'react';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ id, text, onDelete, onSetUpdate }) => {
  const handle = e => {
    onSetUpdate(id, e.target.value);
  };
  return (
    <>
      <input
        className="TodoList__text"
        type="text"
        key={id}
        value={text}
        onChange={handle}
      />

      <button type="button" className="TodoList__btn" onClick={onDelete}>
        <DeleteIcon /> Delete
      </button>
    </>
  );
};

export default Todo;
