import { resolve } from 'node:path';

import { defineConfig } from 'vite';

const root = resolve(import.meta.dirname, 'src/web/assets/cp');

export default defineConfig(({ mode }) => {
    const isCssBuild = mode === 'css';

    if (!isCssBuild && mode !== 'js') {
        throw new Error(`Unknown asset build mode: ${mode}`);
    }

    const output = isCssBuild ? {
        assetFileNames: '[name][extname]',
    } : {
        codeSplitting: false,
        entryFileNames: '[name].js',
        format: 'iife',
    };

    return {
        root,
        input: resolve(root, `src/field-manager.${isCssBuild ? 'css' : 'js'}`),
        build: {
            outDir: resolve(root, 'dist'),
            emptyOutDir: isCssBuild,
            assetsDir: '',
            cssMinify: 'esbuild',
            cssTarget: ['chrome61', 'safari10'],
            minify: 'oxc',
            sourcemap: !isCssBuild,
            target: 'es2015',
            rolldownOptions: {
                output,
            },
        },
    };
});
