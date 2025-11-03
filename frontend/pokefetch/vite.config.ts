import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() ],
  server: {
    allowedHosts: [
      '919f24e7-3082-431d-93b4-375977e47e8a-00-34x9ded4xhlm9.sisko.replit.dev'
    ],
  },
})
