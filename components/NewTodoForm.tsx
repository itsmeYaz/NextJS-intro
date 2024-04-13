"use client";

import { useState } from "react";
import { newTodo } from "@/utils/actions";

export default function NewTodoForm() {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await newTodo(new FormData(event.target));
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          type="text"
          className="border-4 border-green-600 text-black pl-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">New Todo</button>
      </form>
    </>
  );
}
