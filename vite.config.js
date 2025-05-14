import { resolve } from 'path';

export default {
  root: 'src',
  base: '/',
  build: {
    outDir: '../dist/assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        theme: resolve(__dirname, 'src/scripts/layout/theme.js'),
      },
      output: {
        entryFileNames: 'template.[name].js',
        assetFileNames: 'template.[name].[ext]',
      },
    },
  },
};
