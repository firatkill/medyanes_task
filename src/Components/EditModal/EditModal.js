import { useDispatch, useSelector } from "react-redux";
import styles from "./EditModal.module.css";
import { useState } from "react";
import { putAPI } from "@/services/fetchAPI";
import { uiActions } from "@/redux/ui-slice";
const EditModal = () => {
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState(currentTodo.todoName);
  const [todoDescription, setTodoDescription] = useState(
    currentTodo.todoDescription
  );
  const submitHandler = (e) => {
    e.preventDefault();
    const req = putAPI(`/todos/updateTodo`, {
      id: currentTodo.id,
      todoName,
      todoDescription,
    });
    req
      .then((res) => {
        alert(res.message);
        dispatch(uiActions.setModal(null));
      })
      .catch((er) => console.error("Hata oluştu: " + er));
  };
  return (
    <>
      <h1>Edit Todo</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <label>Todo Name</label>
        <input
          value={todoName}
          onChange={(e) => {
            setTodoName(e.currentTarget.value);
          }}
          type="text"
          required
          minLength={3}
          placeholder="todo name here"
        />
        <label>Todo Description</label>
        <input
          value={todoDescription}
          onChange={(e) => {
            setTodoDescription(e.currentTarget.value);
          }}
          minLength={3}
          required
          type="text"
          placeholder="todo description here"
        />
        <button type="submit">Update</button>
      </form>
    </>
  );
};
export default EditModal;
