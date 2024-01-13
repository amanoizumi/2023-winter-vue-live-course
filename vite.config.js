import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-winter-vue-live-course/',
  plugins: [
    Vue(),
    Components({
      dirs: ['src/components'],
      resolvers: IconsResolver({
        prefix: false,
        enabledCollections: ['heroicons-solid', 'heroicons-outline']
      })
    }),
    Icons()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
