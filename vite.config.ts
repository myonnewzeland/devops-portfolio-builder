import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const vendorChunks = {
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
  "vendor-react-icons": ["react-icons"],
  "vendor-data": ["@tanstack/react-query", "react-hook-form", "@hookform/resolvers", "zod"],
  "vendor-ui": ["clsx", "class-variance-authority", "tailwind-merge", "next-themes", "sonner"],
} satisfies Record<string, string[]>;

function manualChunks(id: string) {
  if (!id.includes("node_modules")) {
    return undefined;
  }

  const normalizedId = id.replaceAll("\\", "/");

  for (const [chunkName, packages] of Object.entries(vendorChunks)) {
    if (packages.some((pkg) => normalizedId.includes(`/node_modules/${pkg}/`) || normalizedId.includes(`/node_modules/${pkg}.`))) {
      return chunkName;
    }
  }

  return undefined;
}

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
    ...(mode === "development" ? [componentTagger()] : []),
    ...(mode === "production" ? [
      ViteImageOptimizer({
        png: {
          quality: 80,
        },
        jpeg: {
          quality: 80,
        },
        jpg: {
          quality: 80,
        },
        webp: {
          quality: 78,
        },
        avif: {
          quality: 75,
        },
      }),
      compression({ algorithm: "gzip", ext: ".gz", threshold: 1024, deleteOriginFile: false }),
      compression({ algorithm: "brotliCompress", ext: ".br", threshold: 1024, deleteOriginFile: false }),
      visualizer({ filename: "dist/stats.html", open: false, gzipSize: true, brotliSize: true, template: "treemap" }) as unknown as PluginOption,
    ] : []),
  ],

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
        manualChunks,
      },
    },

    // Aggressive minification with terser for maximum compression
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.trace"],
        dead_code: true,
        unused: true,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
  },
}));
