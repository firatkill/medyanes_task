"use client";
import { useSelector } from "react-redux";
import styles from "./AddTodoInput.module.css";
import { useState } from "react";
import { RiTodoLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { postAPI } from "@/services/fetchAPI";

const AddTodoInput = () => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const loading = useSelector((state) => state.ui.loading);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todoDescription.length >= 3) {
      //post todo
      const req = postAPI(`/todos/postTodo`, { todoName, todoDescription });
      req
        .then((res) => alert(res.message))
        .catch((er) => console.error("Hata oluştu: " + er));
      //if success:
      document.getElementById("todoDescriptionInput").style.display = "none";
      document
        .getElementById("todoDescriptionInput")
        .setAttribute("animate", "false");
      setTodoName("");
      setTodoDescription("");
    }
  };
  const changeHandler = (e) => {
    if (e.currentTarget.id == "nameInput") {
      setTodoName(e.currentTarget.value);
    } else {
      setTodoDescription(e.currentTarget.value);
    }
  };

  const keyDownHandler = (e) => {
    if (e.keyCode == 13) {
      document.getElementById("todoDescriptionInput").style.display = "flex";
      document
        .getElementById("todoDescriptionInput")
        .setAttribute("animate", "true");
    }
  };

  return (
    <form
      loading={loading ? "true" : "false"}
      onSubmit={submitHandler}
      className={styles.todoInputContainer}
    >
      <div className={styles.todoNameInput}>
        {" "}
        <RiTodoLine className={styles.inputTextIcon} />
        <input
          disabled={loading && true}
          className={styles.input}
          placeholder="Todo Name"
          type="text"
          id="nameInput"
          value={todoName}
          minLength={5}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
      </div>
      <div
        animate="false"
        id="todoDescriptionInput"
        className={styles.todoDescriptionInput}
      >
        {" "}
        <CgDetailsMore className={styles.inputTextIcon} />
        <input
          disabled={loading && true}
          className={styles.input}
          id="descriptionInput"
          placeholder="Todo Description "
          type="text"
          value={todoDescription}
          minLength={5}
          onChange={changeHandler}
        />
        <button type="submit" className={styles.addTodoButton}>
          Add Todo
        </button>
      </div>
    </form>
  );
};
export default AddTodoInput;
