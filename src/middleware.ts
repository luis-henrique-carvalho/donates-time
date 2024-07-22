import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const PRIVATE_ROUTES = ["/ongs/create"];

export async function middleware(request: NextRequest) {
  const isProtectedRoute = PRIVATE_ROUTES.some((route: string) =>
    request.nextUrl?.pathname?.startsWith(route)
  );

  if (isProtectedRoute) {
    const isAuth = await isAuthenticated(request);
    console.log("isAuth", isAuth);
    if (!isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

const isAuthenticated = async (request: NextRequest) => {
  const token: any = await getToken({ req: request });
  return !!token && Date.now() <= token.exp * 1000;
};
