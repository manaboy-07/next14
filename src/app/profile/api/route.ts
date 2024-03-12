import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  //altenative to the above
  const headerList = headers();

  //cookies
  const theme = request.cookies.get("theme");
  //setting a cookie alternative
  cookies().set("resultsPerpage", "20");
  console.log(requestHeaders.get("Autorizarion"));
  console.log(headerList.get("Autorizarion"));
  console.log(theme);
  console.log(cookies().get("resultsPerpage"));
  //the cookies() has more features just check the documentation
  return new Response("Profile API data", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme-dark",
    },
  });
}
//Now in thunder client where you see Headers,
//Add and Authorisation and then give a value, add he tags
//Set cookie
//in thunder client you can check the cookies section
