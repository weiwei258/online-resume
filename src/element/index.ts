/**
 *按需引入的组件
 */
import { ElMessage, ElMessageBox } from 'element-plus'
/**
 * 按需导入的存在一个数组
 */
const elementPlus = [ElMessage, ElMessageBox]

export default {
  install: (app: any) => {
    elementPlus.forEach((element) => {
      app.component(element.name, element)
    })
  }
}
