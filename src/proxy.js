// src/proxy.js
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/account/:path*", "/login", "/register"], // routes to apply proxy
};

// ✅ Must export a function named `proxy`
export function proxy(req) {
  const token = req.cookies.get("auth_token")?.value;
  const { pathname } = req.nextUrl;

  // 1️⃣ Logged-in user trying to access /login or /register
  if (token && (pathname === "/login" || pathname === "/register")) {
    const url = req.nextUrl.clone();
    url.pathname = "/account"; // redirect to account/home
    return NextResponse.redirect(url);
  }

  // 2️⃣ Not logged-in user trying to access /account/*
  if (!token && pathname.startsWith("/account")) {
    const url = req.nextUrl.clone();
    url.pathname = "/login"; // redirect to login
    return NextResponse.redirect(url);
  }

  // 3️⃣ Everything else allowed
  return NextResponse.next();
}
