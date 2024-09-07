import TasksFilter from '../TasksFilter/TasksFilter';
import PropTypes from 'prop-types';

export default function Footer({ filter = 'All', leftTodos, changeFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {leftTodos === 1 ? `${leftTodos} item left` : `${leftTodos} items left`}
      </span>
      <TasksFilter filter={filter} changeFilter={changeFilter} />
      <button onClick={() => clearCompleted()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  filter: PropTypes.string,
  leftTodos: PropTypes.number.isRequired,
  changeFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};
