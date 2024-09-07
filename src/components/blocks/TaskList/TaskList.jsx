/* eslint-disable react/prop-types */
import Task from '../Task/Task';

export default function TaskList({ todos, toggleComplete, deleteTodo, editTodo, toggleEditing }) {
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : todo.editing ? 'editing' : null}>
          {/* При изменении добавляет класс к li (completed || editing) */}
          <Task
            {...todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleEditing={toggleEditing}
          />
        </li>
      ))}
    </ul>
  );
}
