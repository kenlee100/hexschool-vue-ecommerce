import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: import.meta.env === "production" ? "/hexschool-vue-ecommerce" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // define: {
  //   "process.env": {},
  // },
  server: {
    port: 3000,
  },
});
