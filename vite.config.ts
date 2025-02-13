import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "IslandUI",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `zylo-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Don't bundle these
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
