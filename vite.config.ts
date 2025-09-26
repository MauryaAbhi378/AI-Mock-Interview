import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {

    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") }
    ]
  }
});


