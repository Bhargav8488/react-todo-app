const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IN_ITEMLIST":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_FROM_ITEMLIST":
      let newTodos = [...state.todos];
      const index = state.todos.findIndex((i) => i.id === action.id);
      if (index >= 0) {
        newTodos.splice(index, 1);
      }
      return {
        ...state,
        todos: newTodos,
      };
    case "UPDATE_TODO":
      let updateTodo = [...state.todos];
      const todoIndex = state.todos.findIndex(
        (i) => i.id === action.payload.id
      );
      if (todoIndex >= 0) {
        updateTodo.splice(todoIndex, 1);
        updateTodo.push(action.payload);
      }
      return {
        ...state,
        todos: updateTodo,
      };

    default:
      return state;
  }
};
export default todoReducer;
