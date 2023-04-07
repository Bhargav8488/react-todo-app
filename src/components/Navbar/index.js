import React from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onButtonPress = () => {
    if (location.pathname === "/add-todo") {
      navigate("/");
    } else {
      navigate("/add-todo");
    }
  };
  return (
    <nav className="navbarContainer">
      <Link to={"/"} className="appTitle">
        <h1 className="appTitleText">To-Do React App</h1>
      </Link>
      <div>
        <ButtonComponent
          title={
            location.pathname === "/add-todo" ? "Go to home" : "Add New Task"
          }
          onButtonClick={() => onButtonPress()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
