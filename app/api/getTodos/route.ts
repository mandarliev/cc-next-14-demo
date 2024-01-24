export async function GET(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return Response.json({ todos });
}
