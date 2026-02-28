import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="flex items-center border-b border-gray-200 p-4">
      <Link to="/">Home</Link>
    </header>
  );
}
