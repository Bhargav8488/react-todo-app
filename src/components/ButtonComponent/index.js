import React from "react";
import "./button.css";

const ButtonComponent = ({ title, onButtonClick, type }) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className="buttonContainer"
        onClick={() => onButtonClick && onButtonClick()}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonComponent;
