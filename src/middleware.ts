import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { configRoutes } from "./config/routes";

const PRIVATE_ROUTES = configRoutes.privateRoutes.map((route) => route.href);

export async function middleware(request: NextRequest) {
  const isProtectedRoute = PRIVATE_ROUTES.some((route: string) => {
    const regex = new RegExp(`^${route.replace(/\[.*?\]/g, ".*")}$`);
    return regex.test(request.nextUrl.pathname);
  });

  if (isProtectedRoute) {
    const isAuth = await isAuthenticated(request);
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

const isAuthenticated = async (request: NextRequest) => {
  const token: any = await getToken({ req: request });
  return !!token && Date.now() <= token.exp * 1000;
};
