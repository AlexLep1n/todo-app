import PropTypes from 'prop-types';

export default function TasksFilter({ filter = 'All', changeFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => changeFilter('All')}
          className={filter === 'All' ? 'selected' : null}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => changeFilter('Active')}
          className={filter === 'Active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => changeFilter('Completed')}
          className={filter === 'Completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};
