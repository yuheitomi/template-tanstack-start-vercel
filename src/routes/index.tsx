import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const getMessageFn = createServerFn({ method: "GET" }).handler(async () => {
  const response = await fetch("http://localhost:3000/api/demo");
  const data = (await response.json()) as { message: string };
  return data;
});

export const Route = createFileRoute("/")({
  loader: async () => await getMessageFn(),
  component: App,
  notFoundComponent: () => <div>Not Found</div>,
});

function App() {
  const { message } = Route.useLoaderData();
  return <div className="mx-auto flex p-4">{message}</div>;
}
