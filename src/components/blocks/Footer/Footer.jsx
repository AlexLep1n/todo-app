/* eslint-disable react/prop-types */
import TasksFilter from '../TasksFilter/TasksFilter';

export default function Footer({ filter }) {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter filter={filter} />
    </footer>
  );
}
