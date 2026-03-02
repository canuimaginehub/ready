import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Si tu dominio principal (ej. midominio.com) apunta directamente a la carpeta /web, deja base como "/".
  // Si las personas entran a midominio.com/web, cambia esto a "/web/"
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: '../', // Compila los archivos un nivel arriba (fuera de _source)
    emptyOutDir: false, // ¡IMPORTANTE! Evita que Vite borre la carpeta padre entera
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
