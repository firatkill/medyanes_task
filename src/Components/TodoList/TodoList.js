"use client";
import { todos as dummyTodos } from "@/mocks/data";
import styles from "./TodoList.module.css";
import TodoListItem from "../TodoListItem/TodoListItem";
import { getAllTodos } from "@/prisma/todo";
import { getAPI } from "@/services/fetchAPI";
import { useEffect, useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const todosData = getAPI("/todos/getTodos");
    todosData
      .then((res) => setTodos(res))
      .catch((er) => console.error("Hata Oluştu: " + er));
  });
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
      <div>
        <button>clear completed</button>
        <button>clear active</button>
      </div>
    </div>
  );
};
export default TodoList;
