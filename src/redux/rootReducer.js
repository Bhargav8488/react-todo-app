import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";

const app = combineReducers({
  todo: todoReducer,
});

export default app;
