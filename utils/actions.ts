"use server";
import db from "./db";
import { revalidatePath } from "next/cache";

export async function completeTodo(id) {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });

  revalidatePath("/todos");
}

export async function newTodo(formData) {
  const todo = await db.todo.create({
    data: {
      content: formData.get("content"),
    },
  });

  revalidatePath("/todos");
}
