import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

export const getAllTodos = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      // son eklediğimiz önce görünsün
      id: "desc",
    },
  });
  return todos;
};
export const deleteTodo = async (id) => {
  await prisma.todo.delete({
    where: {
      id: id,
    },
  });
};
export const postTodo = async (todo) => {
  const todoToCreate = await prisma.todo.create({
    data: {
      todoName: todo.todoName,
      todoDescription: todo.todoDescription,
    },
  });
  return todoToCreate;
};
export const putTodo = async (todo) => {
  const todoToUpdate = await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      todoName: todo.todoName,
      todoDescription: todo.todoDescription,
    },
  });
  return todoToUpdate;
};
