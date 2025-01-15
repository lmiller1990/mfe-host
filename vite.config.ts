import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  base: "/mfe-host/",
  build: {
    target: "esnext",
  },
  plugins: [
    vue(),
    federation({
      name: "mfe_host",
      filename: "remoteEntry.js",
      exposes: {
        "./greet": "./src/greet.ts",
      },
      remotes: {
        mfe_client: {
          name: "mfe_client",
          entry: "http://lmiller1990.github.io/mfe_client/remoteEntry.js",
          type: "module",
        },
      },
    }),
  ],
});
