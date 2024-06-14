import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://stefanlazic.space/hello_boba",
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }]
  }
})
