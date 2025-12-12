import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/demo")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const agent = request.headers.get("user-agent");
        return Response.json({ message: `Hello "/api/demo"! Agent: ${agent}` });
      },
    },
  },
});
