import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    origin: 'http://localhost:5173',
    port: 5173,
  },  
})
