import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  let verify = req.cookies.get('loggedIn')?.value;

  if (pathname.startsWith("/_next")) return NextResponse.next();



  if (Boolean(verify) === true && pathname === "/login/") {
    req.nextUrl.pathname = "/";
    return NextResponse.redirect(req.nextUrl);
  }
  if (Boolean(verify) === true && pathname === "/register/") {
    req.nextUrl.pathname = "/";
    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
}