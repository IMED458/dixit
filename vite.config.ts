import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// GitHub Pages project page: https://imed458.github.io/dixit/
// Local dev stays at /. If a custom domain is added later, change base to '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/dixit/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
}));
