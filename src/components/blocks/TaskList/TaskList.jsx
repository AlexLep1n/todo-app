/* eslint-disable react/prop-types */
import Task from '../Task/Task';

export default function TaskList({ todos, toggleComplete, deleteTodo, editTodo, toggleTodoEditing }) {
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : todo.editing ? 'editing' : null}>
          <Task
            {...todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleTodoEditing={toggleTodoEditing}
          />
        </li>
      ))}
    </ul>
  );
}
