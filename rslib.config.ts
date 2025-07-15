// rslib.config.ts
import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    lib: [
        {
            format: 'esm',
            dts: true,
            output: {
                distPath: { root: './lib-dist/es' },
            },
        },
        {
            format: 'cjs',
            dts: true,
            output: {
                distPath: { root: './lib-dist/lib' },
            },
        },
    ],
    source: {
        entry: { index: './src/lib/index.ts' },
    },
    output: {
        target: 'web',
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },

    plugins: [pluginReact()],
});