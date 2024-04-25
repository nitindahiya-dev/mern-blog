import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Change the target URL here
        secure: false,
      },
    },
  },
  plugins: [react()],
});
