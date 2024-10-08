import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';

export default function Task({
  id,
  description,
  date,
  completed,
  editing,
  toggleComplete,
  deleteTodo,
  editTodo,
  toggleEditing,
}) {
  const [editValue, setEditValue] = useState(description);

  function saveEditingTodo(e) {
    e.preventDefault();
    editTodo(id, editValue);
    toggleEditing(id, false);
  }

  function changeEditStatus() {
    toggleEditing(id, true);
  }

  return (
    <>
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
        <button onClick={() => changeEditStatus()} className="icon icon-edit"></button>
        <button onClick={() => deleteTodo(id)} className="icon icon-destroy"></button>
      </div>
      {editing && (
        <form onSubmit={(e) => saveEditingTodo(e)}>
          <input
            type="text"
            className="edit"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </form>
      )}
    </>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};
