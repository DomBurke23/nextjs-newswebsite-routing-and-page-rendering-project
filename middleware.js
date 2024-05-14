import { NextResponse } from "next/server";

export function middleware(request) {
  // forward request to actual location
  return NextResponse.next();
}

export const config = {
  matcher: "/news", // request request
};
