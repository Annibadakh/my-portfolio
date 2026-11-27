import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site from /my-portfolio/; Netlify and local dev serve it from /.
// The Pages workflow sets GITHUB_PAGES=true.
// Only VITE_* variables are exposed to the client (Vite default); do not inject process.env.
export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/my-portfolio/" : "/",
  plugins: [react()],
  server: { host: true, port: 5173 },
});
