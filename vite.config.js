import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://charming-yak-gaiters.cyclic.app:6543",
        changeOrigin: true,
      }
    },
    host: true,
  }
})
