import { ThemeStylesOptions } from "@/types";
import { defineComponent, ref, SetupContext, PropType } from "vue";
import { useRouter } from 'vue-router'
import styles from "../index.module.less";
import { ThemeSelectorExposed, ThemeSelector } from './ThemeSelector';

interface HeaderProps {
  /** 
   * 主题样式 
   * @default ''
   */
  styleTheme: ThemeStylesOptions;
  onExportPDF(): void;
  onChangeStyleTheme(theme: string): void;
}


const props = {
  /** 主题样式 */
  styleTheme: {
    type: String as PropType<HeaderProps['styleTheme']>,
    default: ''
  },
  /** 打印PDF回调函数 */
  onExportPDF: {
    type: Function as PropType<HeaderProps['onExportPDF']>

  },
  /** 切换主题回调函数 */
  onChangeStyleTheme: {
    type: Function as PropType<HeaderProps['onChangeStyleTheme']>,
  }
}

const Header = defineComponent({
  props,
  setup(props) {
    const { onExportPDF, onChangeStyleTheme } = props
    const resumeName = ref("");
    const ThemeSelectorRef = ref<ThemeSelectorExposed>()
    const router = useRouter()

    const backClick = () => {
      router.back()
    }


    return () => (
      <>
        <ThemeSelector
          ref={ThemeSelectorRef}
          styleTheme={props.styleTheme}
          onChangeStyleTheme={onChangeStyleTheme}
        />
        <header class={styles.header}>
          <div class={styles.left}>
            <div class={styles.backIcon} onClick={backClick}>
              <el-icon>
                <arrow-left />
              </el-icon>
            </div>
            <el-input
              v-model={resumeName.value}
              placeholder="input resume name"
              style={{ maxWidth: "200px" }}
            />
            <nav>
              <span>首页</span>
              <span>编辑模式</span>
              <span onClick={() => ThemeSelectorRef.value?.show()}>
                选择主题
              </span>
              <span>插件列表</span>
              <span>图标列表</span>
            </nav>
          </div>
          <div class={styles.right}>
            <el-button>保存</el-button>
            <el-button type="primary" onClick={() => onExportPDF?.()}>导出</el-button>
          </div>
        </header>
      </>
    )
  }
})

export {
  Header
}