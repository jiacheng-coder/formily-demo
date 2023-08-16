import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import viteAlias from 'vite-plugin-alias' [No need to import]
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
// fileURLToPath: 是 Node.js 中的 url 模块提供的一个方法，用于将文件 URL 转换为文件系统路径。
// new URL('./src', import.meta.url): 创建一个新的 URL 对象，表示 src 目录的绝对路径。import.meta.url 是当前模块的 URL，用作基础 URL。
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // https://vueschool.io/articles/vuejs-tutorials/import-aliases-in-vite/
    },
  },
})
