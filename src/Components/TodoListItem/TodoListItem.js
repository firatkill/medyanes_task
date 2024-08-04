"use client";
import { uiActions } from "@/redux/ui-slice";
import styles from "./TodoListItem.module.css";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { todoActions } from "@/redux/todo-slice";
import { deleteAPI } from "@/services/fetchAPI";

const TodoListItem = (props) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(todoActions.setCurrentTodo(props.todo));
    dispatch(uiActions.setModal("edit"));
  };

  const deleteHandler = (e) => {
    const req = deleteAPI(`/todos/deleteTodo?id=${props.todo.id}`);
    req
      .then((res) => alert(res.message))
      .catch((er) => console.error("Hata oluştu: " + er));
  };
  return (
    <li className={styles.todoListItem}>
      <p className={styles.todoText}>{props.todo.todoName}</p>
      <div className={styles.icons}>
        <RiEditBoxLine onClick={editHandler} className={styles.editIcon} />
        <RiDeleteBin5Line
          onClick={deleteHandler}
          className={styles.deleteIcon}
        />
      </div>
    </li>
  );
};
export default TodoListItem;
