import { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET() {
//   return Response.json(comments);
// }
//the above code works but what i want to do now is work with url query params

export async function GET(request: NextRequest) {
  //to get all searchparams
  //request.nextUrl.searchParams.
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  //locahhost?query='somestuff'
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}
//POST request
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "applicaton/json",
    },
    status: 201,
  });
}
