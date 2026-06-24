import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: 'server/index.ts',
    outDir: 'server-dist',
    emptyOutDir: true,
    target: 'node18',
    rollupOptions: {
      output: {
        entryFileNames: 'index.js'
      }
    }
  }
});
