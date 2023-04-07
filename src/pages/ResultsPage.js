import React, { useEffect, useState } from "react";
import TodoCardComponent from "../components/TodoCard";
import { useSelector } from "react-redux";

const ResultsPage = () => {
  const [tasks, setTasks] = useState([]);
  const { todos } = useSelector((state) => state.app.todo);
  useEffect(() => {
    if (todos) {
      setTasks(todos);
    }
  }, [todos]);

  return (
    <div>
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <TodoCardComponent
              todoTitle={task.name}
              id={task.id}
              key={task.id}
            />
          );
        })}
    </div>
  );
};

export default ResultsPage;
