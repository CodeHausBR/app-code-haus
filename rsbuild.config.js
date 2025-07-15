// rsbuild.config.js
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
    plugins: [pluginReact()],

    source: {
        entry: {
            index: "./src/app/main.tsx",
        },
    },

    html: {
        template: "./src/app/index.html",
    },

    output: {
        distPath: { root: "dist" },
    },

    server: {
        port: 3000,
        open: true,
        proxy: {
            "/hello": {
                target: "http://localhost:8787",
                changeOrigin: true,
            },
        },
    },
});
