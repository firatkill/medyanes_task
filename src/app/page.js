import AddTodoInput from "@/Components/AddTodoInput/AddTodoInput";
import TodoList from "@/Components/TodoList/TodoList";
import TodoContainer from "@/Containers/TodoContainer/TodoContainer";

const Home = () => {
  return (
    <TodoContainer>
      <AddTodoInput />
      <TodoList />
    </TodoContainer>
  );
};

export default Home;
