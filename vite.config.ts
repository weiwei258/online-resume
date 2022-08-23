import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`
            }
          }
        ]
      })
    ],
    base: mode === 'development' ? '/' : './', //此时把环境打包路径也配置好，避免生产环境打包出现白屏
    server: {
      port: 8888
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '/src')
      }
    }
  })
