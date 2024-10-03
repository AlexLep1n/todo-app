import NewTaskForm from '../components/blocks/NewTaskForm/NewTaskForm';
import TaskList from '../components/blocks/TaskList/TaskList';
import Footer from '../components/blocks/Footer/Footer';
import { useMemo, useState } from 'react';
import convertTimeInMs from '../utils/convertTimeInMs';

export default function MainPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  function addTodo({ text, min, sec }) {
    const data = {
      id: Date.now(),
      date: new Date(),
      completed: false,
      description: text,
      editing: false,
      timer: { timeStart: 0, timeLeft: convertTimeInMs(+min, +sec) },
    };
    console.log(data.timer.timeLeft);
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

  function StopTimer(elemId, time) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === elemId) {
          todo.timer.timeLeft = time;
          todo.timer.timeStart = 0;
        }
        return todo;
      })
    );
  }

  function startTimer(elemId) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === elemId) {
          todo.timer.timeStart = Date.now();
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
        if (filter === 'Active') {
          return !todo.completed;
        }
        if (filter === 'Completed') {
          return todo.completed;
        }
        return todo;
      });
    }
    return filteredTodos();
  }, [filter, todos]);

  function clearCompleted() {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  }

  const memoShowTodosCount = useMemo(() => {
    function showTodosCount() {
      if (filter !== 'Completed') {
        return todos.filter((todo) => !todo.completed).length;
      }
      return todos.filter((todo) => todo.completed).length;
    }

    return showTodosCount();
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
        StopTimer={StopTimer}
        startTimer={startTimer}
      />
      <Footer
        filter={filter}
        changeFilter={(value) => setFilter(value)}
        clearCompleted={clearCompleted}
        leftTodos={memoShowTodosCount}
      />
    </>
  );
}
