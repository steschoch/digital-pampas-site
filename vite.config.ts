import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Single React instance across the app and the linked @digital-pampas/ds.
    dedupe: ['react', 'react-dom'],
  },
});
