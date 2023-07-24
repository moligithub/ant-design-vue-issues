import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
export default defineConfig({
  server:{
    host:'0.0.0.0',
    open:true,
    port:3000
  },
  plugins: [
    vue()
  ],
});
