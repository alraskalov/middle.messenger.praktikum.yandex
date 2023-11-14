import { defineConfig, Plugin } from 'vite';

import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  server: {
    port: 3000,
  },
  plugins: [
    eslint(),
  ],

  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        auth: resolve(__dirname, 'src/pages/auth/index.html'),
        login: resolve(__dirname, 'src/pages/auth/modules/login/index.html'),
        signup: resolve(__dirname, 'src/pages/auth/modules/signup/index.html'),
        chat: resolve(__dirname, 'src/pages/chat/index.html'),
        error: resolve(__dirname, 'src/pages/errorTemplate/index.html'),
        404: resolve(__dirname, 'src/pages/errorTemplate/modules/404/index.html'),
        500: resolve(__dirname, 'src/pages/errorTemplate/modules/500/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        viewProfile: resolve(__dirname, 'src/pages/profile/modules/viewProfile/index.html'),
        editPasswordProfile: resolve(__dirname, 'src/pages/profile/modules/editPasswordProfile/index.html'),
        editDataProfile: resolve(__dirname, 'src/pages/profile/modules/editDataProfile/index.html'),
      },
    },
  },
});
