import Task from '../Task/Task';
import PropTypes from 'prop-types';

export default function TaskList({
  todos = [],
  toggleComplete,
  deleteTodo,
  editTodo,
  toggleEditing,
  StopTimer,
  startTimer,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : todo.editing ? 'editing' : null}
        >
          <Task
            {...todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleEditing={toggleEditing}
            StopTimer={StopTimer}
            startTimer={startTimer}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  todos: PropTypes.array,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  StopTimer: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
};
