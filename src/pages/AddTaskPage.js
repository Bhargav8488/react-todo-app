import React, { useEffect, useState } from "react";
import "./addTaskPage.css";
import ButtonComponent from "../components/ButtonComponent";
import { v4 as uuid } from "uuid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const AddTaskPage = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { todos } = useSelector((state) => state.app.todo);
  useEffect(() => {
    if (todos && todos.length > 0) {
      const todo = todos.find((data) => data.id === params.id);
      if (todo && todo.name) {
        setTask(todo.name);
      } else {
        setTask("");
      }
    }
  }, [params, todos]);

  const onUpdatePress = (e) => {
    e?.preventDefault();
    dispatch({
      type: "UPDATE_TODO",
      payload: {
        id: params.id,
        name: task,
      },
    });
    setTask("");
    setTimeout(() => navigate("/"), 500);
  };

  const onSubmitNewTask = (e) => {
    e?.preventDefault();
    if (!task) {
      alert("Please add your task");
    } else {
      const newTask = {
        name: task,
        id: uuid(),
      };
      dispatch({
        type: "ADD_IN_ITEMLIST",
        payload: newTask,
      });
      setTask("");
      setTimeout(() => navigate("/"), 500);
    }
  };

  return (
    <div className="addTaskContainer">
      <form
        className="formContainer"
        onSubmit={
          location.pathname === "/add-todo" ? onSubmitNewTask : onUpdatePress
        }
      >
        <input
          type="text"
          placeholder="Enter your task"
          className="textInput"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="submitButton">
          {location.pathname === "/add-todo" ? (
            <ButtonComponent title={"Add"} type={"submit"} />
          ) : (
            <ButtonComponent title={"Submit"} type={"submit"} />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTaskPage;
