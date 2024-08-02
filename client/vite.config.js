import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/npi-medical-search",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "https://npi-db.org",
        target: "http://localhost:8080",
      },
    },
  },
});
