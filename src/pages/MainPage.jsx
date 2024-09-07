import NewTaskForm from '../components/Blocks/NewTaskForm/NewTaskForm';
import TaskList from '../components/Blocks/TaskList/TaskList';
import Footer from '../components/blocks/Footer/Footer';
import { useMemo, useState } from 'react';

export default function MainPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  function addTodo(value) {
    const data = {
      id: Date.now(),
      date: new Date(),
      completed: false,
      description: value,
      editing: false,
    };
    setTodos([...todos, data]);
  }

  function deleteTodo(elemId) {
    setTodos((todos) => todos.filter((todo) => todo.id !== elemId));
  }

  function toggleComplete(elemId, completeStatus) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === elemId) {
          todo.completed = completeStatus;
        }
        return todo;
      })
    );
  }

  function editTodo(elemId, newValue) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === elemId) {
          todo.description = newValue;
        }
        return todo;
      })
    );
  }

  function toggleEditing(elemId, status) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === elemId) {
          todo.editing = status;
        }
        return todo;
      })
    );
  }

  const memoTodos = useMemo(() => {
    function filteredTodos() {
      return todos.filter((todo) => {
        if (filter === 'Completed') {
          return todo.completed;
        }
        if (filter === 'Active') {
          return !todo.completed;
        }
        return todo;
      });
    }
    return filteredTodos();
  }, [filter, todos]);

  return (
    <>
      <NewTaskForm addTodo={addTodo} />
      <TaskList
        todos={memoTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleEditing={toggleEditing}
      />
      <Footer filter={filter} />
    </>
  );
}
