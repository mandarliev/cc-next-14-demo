export async function GET(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const newTodos = [
    {
      id: 0,
      title: "GET REQUEST DEMO",
    },
    ...todos,
  ];

  return Response.json({ todos: newTodos });
}

export async function POST(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  const newTodos = [
    {
      id: 0,
      title: "POST REQUEST DEMO",
    },
    ...todos,
  ];

  return Response.json({ todos: newTodos });
}
