import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  clearScreen: false,
  json: {
    namedExports: true,
    stringify: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    brotliSize: false,
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      name: 'xcd',
      formats: ['es']
    },
    commonjsOptions: {
      include: [
        'node_modules/**',
        'node_modules/**/*'
      ]
    },
  }
});
