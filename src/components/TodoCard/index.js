import React from "react";
import ButtonComponent from "../ButtonComponent";
import "./todoCard.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TodoCardComponent = ({ todoTitle, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteButtonPress = () => {
    dispatch({
      type: "REMOVE_FROM_ITEMLIST",
      id: id,
    });
  };
  return (
    <div className="todoCardContainer">
      <div>
        <h2 className="todoTitle">{todoTitle}</h2>
      </div>
      <div className="buttonGroup">
        <ButtonComponent
          title={"Edit"}
          onButtonClick={() => navigate(`/update-todo/${id}`)}
        />
        <ButtonComponent
          title={"Delet"}
          onButtonClick={() => onDeleteButtonPress()}
        />
      </div>
    </div>
  );
};

export default TodoCardComponent;
