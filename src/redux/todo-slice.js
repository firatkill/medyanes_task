import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], currentTodo: null },
  reducers: {
    updateTodos(state, action) {
      state.todos = action.payload;
    },
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
});

export default todoSlice;
export const todoActions = todoSlice.actions;
