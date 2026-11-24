import { resolve } from 'node:path';

import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'src/web/assets/cp');
const jsEntries = {
    js: 'field-manager',
    'plugin-kit': 'plugin-kit',
};

export default defineConfig(({ mode }) => {
    const isCssBuild = mode === 'css';

    if (!isCssBuild && !jsEntries[mode]) {
        throw new Error(`Unknown asset build mode: ${mode}`);
    }

    // Plugin Kit's web components need native class fields, so its bundle keeps Vite's modern default target.
    const isPluginKit = mode === 'plugin-kit';

    const output = isCssBuild ? {
        assetFileNames: '[name][extname]',
    } : {
        assetFileNames: '[name][extname]',
        codeSplitting: false,
        entryFileNames: '[name].js',
        format: 'iife',
    };

    return {
        root,
        input: resolve(root, isCssBuild ? 'src/field-manager.css' : `src/${jsEntries[mode]}.js`),
        build: {
            outDir: resolve(root, 'dist'),
            emptyOutDir: isCssBuild,
            assetsDir: '',
            cssMinify: 'esbuild',
            cssTarget: ['chrome61', 'safari10'],
            minify: 'oxc',
            sourcemap: !isCssBuild && !isPluginKit,
            target: isPluginKit ? undefined : 'es2015',
            rolldownOptions: {
                output,
            },
        },
    };
});
