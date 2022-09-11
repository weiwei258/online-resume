import { defineComponent, ref } from "vue";
import { ThemeStylesOptions } from "@/types";
import styles from "@/assets/styles/theme-selector.module.less";
import useThemeStore from "@/store/theme";

export default defineComponent({
  setup(props, { expose }) {
    const dialogVisible = ref(false);
    const theme = ref<ThemeStylesOptions>();
    const themeStore = useThemeStore();
    expose({
      show: () => {
        dialogVisible.value = true;
      },
    });
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
                  onClick={() => {
                    themeStore.setMarkdownTheme(
                      // @ts-ignore
                      ThemeStylesOptions[theme.value]
                    );
                  }}
                >
                  保存
                </el-button>
              </div>
            );
          },
          default: () => {
            return (
              <div class={styles.themeList}>
                {(Object.keys(ThemeStylesOptions) as ThemeStylesOptions[]).map(
                  (key) => {
                    return (
                      <div
                        class={[
                          styles.themeCard,
                          theme.value === key ? styles.active : "",
                        ]}
                        onClick={() => {
                          theme.value = key;
                        }}
                      >
                        {/*// @ts-ignore */}
                        {ThemeStylesOptions[key]}
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
