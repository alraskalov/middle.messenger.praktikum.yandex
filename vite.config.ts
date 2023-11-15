import {defineConfig, Plugin} from 'vite';

import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    server: {
        port: 3000,
    },
    plugins: [
        handlebars({
            partialDirectory: [
                resolve(__dirname, './src/components'),
                resolve(__dirname, './src/pages/auth/components'),
                resolve(__dirname, './src/pages/auth/layouts'),
                resolve(__dirname, './src/pages/profile/components'),
                resolve(__dirname, './src/pages/profile/layouts'),
                resolve(__dirname, './src/pages/chat/components'),
                resolve(__dirname, './src/pages/chat/layouts'),
            ],
            context: {
                global: 'global',
            },
        }) as unknown as Plugin,
    ],
    publicDir: resolve(__dirname, 'public'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                auth: resolve(__dirname, 'src/pages/auth/index.html'),
                login: resolve(__dirname, 'src/pages/auth/modules/login/index.html'),
                signup: resolve(__dirname, 'src/pages/auth/modules/signup/index.html'),
                chat: resolve(__dirname, 'src/pages/chat/index.html'),
                error: resolve(__dirname, 'src/pages/error/index.html'),
                404: resolve(__dirname, 'src/pages/error/modules/404/index.html'),
                500: resolve(__dirname, 'src/pages/error/modules/500/index.html'),
                profile: resolve(__dirname, 'src/pages/profile/index.html'),
                viewProfile: resolve(__dirname, 'src/pages/profile/modules/viewProfile/index.html'),
                editPasswordProfile: resolve(__dirname, 'src/pages/profile/modules/editPasswordProfile/index.html'),
                editDataProfile: resolve(__dirname, 'src/pages/profile/modules/editDataProfile/index.html'),
            },
            output: {
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
});
