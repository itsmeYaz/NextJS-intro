import Todo from "@/components/Todo";

export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </>
  );
}
