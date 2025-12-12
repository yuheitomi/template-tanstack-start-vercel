import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="flex items-center border-gray-200 border-b p-4">
      <Link to="/">Home</Link>
    </header>
  );
}
