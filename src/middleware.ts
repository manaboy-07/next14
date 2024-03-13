//lets say /profile redirects to the home page

import { NextResponse, type NextRequest } from "next/server";

//Use of cookies

export function cookiemiddleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  //adding headers
  response.headers.set("custom-header", "custom-value");
  return response;
}

//Redirecting
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
  }
}

//OR

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   mather: "/profile",
// };
//it will apply to the profile side

//CONCLUSION , middleware allow us to control and intercept the request response cycle
