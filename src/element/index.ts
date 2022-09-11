/**
 *按需引入的组件
 */
import {
  ElMessage,
  ElMessageBox,
  ElContainer,
  ElButton,
  ElInput,
  ElIcon,
  ElDialog,
} from 'element-plus'
import { Edit, ArrowLeft } from '@element-plus/icons-vue'

/**
 * 按需导入的存在一个数组
 */
const elementPlus = [
  ElMessage,
  ElMessageBox,
  ElButton,
  ElContainer,
  ElInput,
  ArrowLeft,
  ElIcon,
  ElDialog,
]
const icons = [Edit]
export default {
  install: (app: any) => {
    elementPlus.forEach((component) => {
      app.component(component.name, component)
    })

    // 注册图标
    icons.forEach((icon) => {
      app.component(icon.name, icon)
    })
  },
}
