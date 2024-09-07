/* eslint-disable react/prop-types */
import TasksFilter from '../TasksFilter/TasksFilter';

export default function Footer({ filter, todos, changeFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {todos.length === 1 ? `${todos.length} item left` : `${todos.length} items left`}
      </span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
    </footer>
  );
}
