import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET(request: Request) {
  const todos = await db.todo.findMany({});
  return NextResponse.json({
    message: todos,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  });
  return NextResponse.json({
    message: todo,
  });
}
