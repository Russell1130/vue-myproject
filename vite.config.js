import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  })],
  build: {
    lib: {
      entry: './src/entry.js',
      formats: ['es','cjs'],
      name: 'web-component',
      fileName: (format)=>(format === 'es' ? 'index.js' : 'index.cjs')
    },
    sourcemap: true,
    target: 'esnext',
    minify: false
  }
})