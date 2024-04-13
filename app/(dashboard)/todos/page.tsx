import db from "@/utils/db";
import TodoList from "@/components/TodoList";

async function getTodos() {
  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
}

export default async function Todos() {
  const todos = await getTodos();
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
