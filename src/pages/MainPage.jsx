import NewTaskForm from "../components/blocks/NewTaskForm/NewTaskForm";
import TaskList from "../components/blocks/TaskList/TaskList";
import Footer from "../components/blocks/Footer/Footer";
import { useMemo, useState } from "react";
import { formatDistanceToNow } from "date-fns";

export default function MainPage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  function addTodo(value) {
    const data = {
      id: new Date(),
      completed: false,
      description: value,
      createdDate: formatDistanceToNow(new Date(new Date()), {
        includeSeconds: true,
        addSuffix: true,
      }),
    };
    setTodos([...todos, data]);
  }

  const memoTodos = useMemo(() => {
    function filteredTodos() {
      return todos.filter((todo) => {
        if (filter === "Completed") {
          return todo.completed;
        }
        if (filter === "Active") {
          return !todo.completed;
        }
        return todo;
      });
    }

    filteredTodos();
  }, [filter, todos]);

  return (
    <>
      <NewTaskForm addTodo={addTodo} />
      <TaskList todos={memoTodos} />
      <Footer filter={filter} />
    </>
  );
}
