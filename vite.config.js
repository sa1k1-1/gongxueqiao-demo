import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({

  // --- 这是你需要添加的代码 ---
  // 告诉 Vite，你的项目是部署在 /gongxueqiao-demo/ 这个子目录下的
  base: '/gongxueqiao-demo/',
  // -------------------------

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
