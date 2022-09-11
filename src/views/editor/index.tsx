import { defineComponent, ref } from "vue";
import useResizer from "@/hooks/useResizer";
import styles from "./index.module.less";
import useThemeStore from "@/store/theme";
import { ThemeStylesOptions } from "@/types";
import ThemeSelector from "@/components/Editor/ThemeSelector";
import Editor from "@/components/Editor/Editor";
import View from "@/components/Editor/View";

export default defineComponent({
  setup(props) {
    const themeSelectorRef = ref();
    const themeStore = useThemeStore();
    themeStore.setMarkdownTheme(ThemeStylesOptions.NotionDark);
    const { clientX: codeEditorWidth, resizerRef } = useResizer();
    const resumeName = ref("");

    return () => (
      <div class={styles.editorPage}>
        <ThemeSelector ref={themeSelectorRef}></ThemeSelector>
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
              style={{ maxWidth: "200px" }}
            />
            <nav>
              <span>首页</span>
              <span>编辑模式</span>
              <span onClick={() => themeSelectorRef.value.show()}>
                选择主题
              </span>
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
            style={{ width: codeEditorWidth.value + "px" }}
          >
            <Editor />
          </div>
          <div class={styles.resizer} ref={resizerRef}></div>
          <div class={styles.right}>
            <View class={styles.renderContent} />
          </div>
        </div>
      </div>
    );
  },
});
