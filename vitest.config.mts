import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      all: true,
      include: ['src/'],
      exclude: [
        'src/pages/_*.tsx',
        'src/__tests__/*',
        '**/types.ts',
        '**/constants.ts',
      ],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.mts'],
    watch: false,
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
});
