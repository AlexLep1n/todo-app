import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTaskForm({ addTodo }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  function keyUpHandler(e) {
    if (e.code === 'Enter' && newTodoValue.trim()) {
      addTodo(newTodoValue);
      setNewTodoValue('');
    }
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        onKeyUp={(e) => keyUpHandler(e)}
      />
    </header>
  );
}

NewTaskForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
