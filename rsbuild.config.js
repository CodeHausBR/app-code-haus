// rsbuild.config.js
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import tailwindcssPlugin from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
    plugins: [pluginReact()],
    tools: {
        postcss: (config) => {
            config.postcssOptions.plugins = [tailwindcssPlugin(), autoprefixer()];
        },
    },
    source: {
        entry: {
            index: "./src/app/main.tsx",
        },
    },
    html: {
        template: "./src/app/index.html",
        title: "Code Haus",
        tags: [
            {
                tag: "link",
                attrs: {
                    rel: "icon",
                    href: "/icones/favicon.ico",
                    type: "image/x-icon",
                },
            },
        ],
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
