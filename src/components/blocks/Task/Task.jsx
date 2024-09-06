import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';
/* eslint-disable react/prop-types */

export default function Task({
  id,
  description,
  date,
  editing,
  completed,
  toggleComplete,
  deleteTodo,
  editTodo,
  toggleTodoEditing,
}) {
  const [editValue, seteditValue] = useState('');

  function saveEditingTodo(e) {
    e.preventDefault();
    editTodo(id, editValue);
  }

  return (
    <>
      {/* При изменении добавляет класс к li (completed || editing) */}
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleComplete(id, e.target.checked)}
        />
        <label htmlFor={id}>
          <span className="description">{description}</span>
          <span className="created">
            {`created ${formatDistanceToNow(date, {
              locale: enUS,
              includeSeconds: true,
              addSuffix: true,
            })}`}
          </span>
        </label>
        <button onClick={() => toggleTodoEditing(id)} className="icon icon-edit"></button>
        <button onClick={() => deleteTodo(id)} className="icon icon-destroy"></button>
      </div>
      {editing && (
        <form onSubmit={(e) => saveEditingTodo(e)}>
          <input type="text" className="edit" value={editValue} onChange={(e) => seteditValue(e.target.value)} />
        </form>
      )}
    </>
  );
}
