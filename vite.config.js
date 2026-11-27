import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Only VITE_* variables are exposed to the client (Vite default).
// Do not inject process.env into the bundle.
export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
});
