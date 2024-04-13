import { NextResponse } from "next/server";

export default function middleware(request) {
  return NextResponse.redirect(new URL("/todos", request.url));
}

export const config = {
  matcher: ["/api/todo"],
};
