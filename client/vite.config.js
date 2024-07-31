import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/npi-medical-search",
  plugins: [react()],
  build: {
    proxy: {
      "/api": {
        target: "https://npi-db.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://npi-db.org",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
