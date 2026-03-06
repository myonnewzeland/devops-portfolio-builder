import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // Gzip compression for production assets
    mode === "production" &&
      compression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024, // only files > 1KB
        deleteOriginFile: false,
      }),

    // Brotli compression (better than gzip, supported by modern CDNs)
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024,
        deleteOriginFile: false,
      }),

    // Bundle visualizer — generates stats.html after build
    mode === "production" &&
      visualizer({
        filename: "dist/stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // Target modern browsers for smaller output (no legacy polyfills)
    target: "es2020",

    // Increase warning threshold to 600KB (reasonable for a portfolio)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting — keeps vendor code separate for long-term caching
        manualChunks: {
          // React core — changes rarely, high cache hit rate
          "vendor-react": ["react", "react-dom", "react-router-dom"],

          // Radix UI primitives — large but stable
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip",
          ],

          // Icons — tree-shaken at module level by SWC, but bundled separately
          "vendor-icons": ["lucide-react"],

          // Data & forms
          "vendor-data": [
            "@tanstack/react-query",
            "react-hook-form",
            "@hookform/resolvers",
            "zod",
          ],

          // UI utilities
          "vendor-ui": [
            "clsx",
            "class-variance-authority",
            "tailwind-merge",
            "next-themes",
            "sonner",
            "vaul",
          ],
        },
      },
    },

    // Drop console.* and debugger in production — no log leakage
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
