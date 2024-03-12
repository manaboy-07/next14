import { comments } from "../data";
import { redirect } from "next/navigation";
// /comment/1
//Now suppose our array has only comments of id up to 3, and we do comment/4
//we need to handle this error this is where redirect comes in.
//since we are not making use of the request parameter i have prefixed it with an underscore

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  //first find the id
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}
//PATCH request
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
  //experiment in thunder client
}
//DELETE
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleteComment = comments[index];
  //use splice
  comments.splice(index, 1);
  return Response.json(deleteComment);
}
