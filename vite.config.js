// vite.config.js
import {
  resolve
} from 'path'
import {
  defineConfig
} from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/core/moni.js'),
      name: 'moniJs',
      fileName: 'moni',
    },
    rollupOptions: {

    },
  },
})