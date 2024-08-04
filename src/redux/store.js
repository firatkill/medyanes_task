import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export default store;
