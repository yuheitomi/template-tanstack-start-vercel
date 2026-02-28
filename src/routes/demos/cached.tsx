import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demos/cached")({
  component: RouteComponent,
  headers: () => ({
    "Cache-Control": "public, max-age=3600, s-maxage=3600",
  }),
});

function RouteComponent() {
  return <div>Hello "/demos/cached"!</div>;
}
