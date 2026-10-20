import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on any GitHub Pages path
// (e.g. https://sagarakrishantha96.github.io/portfolio/) without changes.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
