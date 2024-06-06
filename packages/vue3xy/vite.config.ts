/*
 * @Author: Chengbotao
 * @Contact: https://github.com/chengbotao
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'vue3xy',
      fileName: 'vue3xy',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
