import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const isDev = mode === "development";

  const plugins: PluginOption[] = [
    react(),
  ];

  if (isDev) {
    plugins.push(componentTagger());
  }

  if (isProd) {
    // Gzip compression for production assets
    plugins.push(
      compression({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 1024,
        deleteOriginFile: false,
      })
    );

    // Brotli compression (better ratio, supported by Cloudflare CDN)
    plugins.push(
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 1024,
        deleteOriginFile: false,
      })
    );

    // Bundle visualizer — generates dist/stats.html after build
    plugins.push(
      visualizer({
        filename: "dist/stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
        template: "treemap",
      }) as unknown as PluginOption
    );
  }

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      // Target modern browsers — no legacy polyfills needed
      target: "es2020",

      // Reasonable threshold for a portfolio with shadcn/ui
      chunkSizeWarningLimit: 600,

      rollupOptions: {
        output: {
          // Vendor splitting — stable chunks with high CDN cache hit rate
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router-dom"],

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

            "vendor-icons": ["lucide-react"],

            "vendor-data": [
              "@tanstack/react-query",
              "react-hook-form",
              "@hookform/resolvers",
              "zod",
            ],

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

      // Drop console.* and debugger in production
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
});
