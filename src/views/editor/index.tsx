import { defineComponent, ref, computed, onMounted } from 'vue'
import Codemirror from 'codemirror-editor-vue3'
import { debounce } from 'lodash'
import markdownIt, { cmOptions } from './markdown'
import { md as initalMarkDowmStr } from './md'
import useResizer from '@/hooks/useResizer'
import styles from './index.module.less'
import useThemeStore from '@/store/theme'
import { ThemeStylesOptions } from '@/types'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    const md = ref(initalMarkDowmStr)
    const onChange = (val: string) => {
      md.value = val
    }
    const themeStore = useThemeStore()
    themeStore.setMarkdownTheme(ThemeStylesOptions.NotionDark)
    const { clientX: codeEditorWidth, resizerRef } = useResizer()

    const html = computed(() => {
      if (md.value) {
        const token = markdownIt.parse(md.value).map((token) => {
          return {
            ...token,
            attrs: [['theme', 'red-theme']],
          }
        })
        return markdownIt.renderer.render(token)
      }
      return ''
    })
    const resumeName = ref('')

    return () => (
      <div class={styles.editorPage}>
        <header class={styles.header}>
          <div class={styles.left}>
            <div class={styles.backIcon}>
              <el-icon>
                <arrow-left />
              </el-icon>
            </div>
            <el-input
              v-model={resumeName.value}
              placeholder="input resume name"
              style={{ maxWidth: '200px' }}
            />
            <nav>
              <span>首页</span>
              <span>编辑模式</span>
              <span>选择主题</span>
              <span>插件列表</span>
              <span>图标列表</span>
            </nav>
          </div>
          <div class={styles.right}>
            <el-button>保存</el-button>
            <el-button type="primary">导出</el-button>
          </div>
        </header>
        <div class={styles.main}>
          <div
            class={styles.left}
            style={{ width: codeEditorWidth.value + 'px' }}>
            <Codemirror
              value={md.value}
              options={cmOptions}
              placeholder="test placeholder"
              height="100%"
              width="100%"
              onChange={debounce(onChange, 300)}
            />
          </div>
          <div class={styles.resizer} ref={resizerRef}></div>
          <div class={styles.right}>
            <div
              v-html={html.value}
              class={styles.renderContent}
              id="md-content"></div>
          </div>
        </div>
      </div>
    )
  },
})
