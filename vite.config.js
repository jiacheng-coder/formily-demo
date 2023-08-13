import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import viteAlias from 'vite-plugin-alias' [No need to import]
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/
    },
  },
})
