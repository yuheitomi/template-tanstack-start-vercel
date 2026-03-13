import viteReact from "@vitejs/plugin-react";
import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

const mode = process.env.MODE ?? process.env.NODE_ENV ?? "test";
const env = loadEnv(mode, process.cwd(), "");

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [viteReact()],
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    env,
  },
});
