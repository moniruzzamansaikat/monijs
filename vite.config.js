import {
  resolve
} from 'path';
import {
  defineConfig
} from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/core/moni.js'),
      name: 'moniJs',
      fileName: (format) => `moni.${format}${format === 'es' ? '' : '.min'}.js`,
      formats: ['es', 'umd', 'cjs'], 
    },
    rollupOptions: {
      output: {
        globals: {},  
      },
    },
    terserOptions: {
      compress: true,  
    },
    minify: 'terser', 
  },
});