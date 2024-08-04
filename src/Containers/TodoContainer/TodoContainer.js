import styles from "./TodoContainer.module.css";
const TodoContainer = ({ children }) => {
  return (
    <div className={styles.todoContainer}>
      <h1
        style={{
          textAlign: "center",
          letterSpacing: 10,
          color: "GrayText",
          marginBottom: "1rem",
        }}
      >
        TODOS.
      </h1>
      {children}
    </div>
  );
};
export default TodoContainer;
