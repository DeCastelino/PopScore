import { NextResponse, NextRequest } from "next/server";

const middleware = (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  // Retrieve user session from localStorage
  const userSession = req.cookies.get("user") || null;

  if (!userSession && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url)); // Redirect unauthenticated users
  }

  if (userSession && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect logged-in users away from login page
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/", "/dashboard", "/profile", "/login", "/signup"], // Apply middleware to these routes
};
