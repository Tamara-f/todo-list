import React from 'react';
import FlipMove from 'react-flip-move';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onSetUpdate }) => (
  <ul className="TodoList">
    <FlipMove duration={300} easing="ease-in-out">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item ">
          <Todo
            text={text}
            id={id}
            onDelete={() => onDeleteTodo(id)}
            onSetUpdate={onSetUpdate}
          />
        </li>
      ))}
    </FlipMove>
  </ul>
);

export default TodoList;
