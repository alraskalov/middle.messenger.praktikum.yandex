import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    server: {
        port: 3000,
    },
    preview: {
      port: 3000,
    },
    publicDir: resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
            },
            output: {
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
