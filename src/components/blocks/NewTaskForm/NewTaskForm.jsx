import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTaskForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState({ text: '', min: '', sec: '' });

  function submitHandler(e) {
    if (newTodo.text.trim() && e.code === 'Enter') {
      addTodo(newTodo);
      setNewTodo({ text: '', min: '', sec: '' });
    }
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <form className="new-todo-form" onKeyUp={(e) => submitHandler(e)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo.text}
          onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          value={newTodo.min}
          onChange={(e) => setNewTodo({ ...newTodo, min: e.target.value })}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          value={newTodo.sec}
          onChange={(e) => setNewTodo({ ...newTodo, sec: e.target.value })}
        />
      </form>
    </header>
  );
}

NewTaskForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
