import { comments } from "../data";
//since we are not making use of the request parameter i have prefixed it with an underscore

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
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
