import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index-vue.html'),
    },
  },
  server: {
    open: '/index-vue.html',
  },
})
