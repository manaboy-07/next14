export const dynamic = "force-dynamic"; // this will not allow it to cache
export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
} //in build mode it doesnt change, its cachin
//so if we dont want it to be cahced there wre ways
