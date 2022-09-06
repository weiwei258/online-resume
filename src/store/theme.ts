import { defineStore } from 'pinia'
import useThemeStyle from '@/hooks/useThemeStyle'
import { ThemeStylesOptions } from '@/types'
const THEMESTYLE = {
  [ThemeStylesOptions.NotionDark]: import('@/assets/styles/notion-dark.less'),
  [ThemeStylesOptions.NotionDarker]: import('@/assets/styles/notion-dark.less'),
  [ThemeStylesOptions.NotionLight]: import('@/assets/styles/notion-light.less'),
}
export default defineStore('theme', {
  state: () => ({
    theme: ThemeStylesOptions.NotionDark,
  }),
  actions: {
    setMarkdownTheme(theme: ThemeStylesOptions) {
      this.theme = theme
      // 插入style
      const style = useThemeStyle()
      THEMESTYLE[theme].then((res) => {
        style.innerHTML = res.default
      })
    },
  },
})
