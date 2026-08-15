// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export mode (`bun run build:static` / `npm run build:static`) prerenders every
// route to plain HTML for upload to ordinary shared hosting. The normal Lovable build
// (`build` / `build:dev`) is untouched and still runs on the server runtime.
const isStaticExport = process.env["STATIC_EXPORT"] === "1";

const prerenderPages = [
  "/",
  "/about",
  "/brands",
  "/products",
  "/factory",
  "/quality",
  "/vision",
  "/contact",
  "/404",
];

export default defineConfig({
  ...(isStaticExport
    ? {
        tanstackStart: {
          prerender: { enabled: true, crawlLinks: true },
          pages: prerenderPages.map((path) => ({ path, prerender: { enabled: true } })),
        },
        nitro: { preset: "static" },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          // nitro/vite builds from this
          server: { entry: "server" },
        },
      }),
});
