// <reference types="vitest" />
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths'

import angular from '@analogjs/vite-plugin-angular';
import * as path from 'node:path';

export default defineConfig(({ mode }) => ({
  plugins: [angular(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: 'setup-vitest.ts',
    environment: 'jsdom',
    include: [path.join(__dirname, 'vitest/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}').replace(/\\/g, '/')],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  }
}));
