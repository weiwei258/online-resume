import { defineComponent, PropType, ref } from "vue";
import { ThemeStylesOptions } from "@/types";
import styles from './theme-selector.module.less';


interface ThemeSelectorProps {
  styleTheme: ThemeStylesOptions;
  onChangeStyleTheme(theme: ThemeStylesOptions): void;
}
interface ThemeSelectorExposed {
  show(): void;
}
const props = {
  /** 主题样式 */
  styleTheme: {
    type: String as PropType<ThemeSelectorProps['styleTheme']>,
    default: ''
  },
  /** 切换主题回调函数 */
  onChangeStyleTheme: {
    type: Function as PropType<ThemeSelectorProps['onChangeStyleTheme']>,
  }
}
const ThemeSelector = defineComponent({
  props,
  setup(props, { expose }) {
    const { onChangeStyleTheme } = props
    const dialogVisible = ref(false);

    expose({
      show: () => {
        dialogVisible.value = true;
      },
    } as ThemeSelectorExposed);

    const onClick = () => {
      dialogVisible.value = false
    }

    const selectThemeStyle = (styleTheme: ThemeStylesOptions) => {
      dialogVisible.value = false
      onChangeStyleTheme?.(styleTheme)
    }

    return () => (
      <el-dialog
        v-model={dialogVisible.value}
        title="选择主题"
        width="50%"
        v-slots={{
          footer: () => {
            return (
              <div>
                <el-button onClick={() => (dialogVisible.value = false)}>
                  取消
                </el-button>
                <el-button
                  type="primary"
                  onClick={onClick}
                >
                  保存
                </el-button>
              </div>
            );
          },
          default: () => {
            return (
              <div class={styles.themeList}>
                {(Object.keys(ThemeStylesOptions) as (ThemeStylesOptions)[]).map(
                  (key) => {
                    const themeStyle = ThemeStylesOptions[key] as ThemeStylesOptions
                    return (
                      <div
                        class={[
                          styles.themeCard,
                          props.styleTheme === themeStyle ? styles.active : "",
                        ]}
                        onClick={() => selectThemeStyle(themeStyle)}
                      >
                        {themeStyle}
                      </div>
                    );
                  }
                )}
              </div>
            );
          },
        }}
      ></el-dialog>
    );
  },
});


export {
  ThemeSelector,
  type ThemeSelectorExposed,
}