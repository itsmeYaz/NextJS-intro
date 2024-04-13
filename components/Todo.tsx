"use client";
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react";

export default function Todo({ todo }) {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <div
        className={`cursor-pointer border border-black/20 ${todo.completed ? "line-through text-gray-500" : "text-green-600"}`}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.content}
      </div>
    </>
  );
}
