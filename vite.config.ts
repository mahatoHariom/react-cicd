import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "https://mahatohariom.github.io",
  base: "/vite-deploy-demo/",
});
