import { defineComponent, ref } from "vue";

import useResizer from "@/hooks/useResizer";
import styles from "./index.module.less";
import { HTMLRender, MarkDowmEditor, Header, HTMLRenderExposed } from './components'
import { transformHtmlFunc } from './utils'
import { md } from './md';
import { ThemeStylesOptions } from "@/types";

export default defineComponent({
  setup() {
    const { clientX: codeEditorWidth, resizerRef } = useResizer();

    const mdRef = ref(md)
    const htmlRef = ref(transformHtmlFunc(md, { theme: 'blue' }))
    const onChange = (mdStr: string) => {
      mdRef.value = mdStr
      htmlRef.value = transformHtmlFunc(mdStr, { theme: 'blue' })
    }

    const htmlRenderRef = ref<HTMLRenderExposed>();
    const onExportPDF = () => {
      htmlRenderRef.value?.exportPDF()
    }

    const styleThemeRef = ref<ThemeStylesOptions>('blue' as ThemeStylesOptions)
    const onChangeStyleTheme = (themeStyle: ThemeStylesOptions) => {
      styleThemeRef.value = themeStyle
      htmlRef.value = transformHtmlFunc(mdRef.value, { theme: themeStyle })
    }

    return () => (
      <div class={styles.editorPage}>
        <Header
          styleTheme={styleThemeRef.value}
          onExportPDF={onExportPDF}
          onChangeStyleTheme={onChangeStyleTheme}
        />
        <div class={styles.main}>
          <div
            class={styles.left}
            style={{ width: codeEditorWidth.value + "px" }}
          >
            <MarkDowmEditor
              value={mdRef.value}
              onChange={onChange}
            />
          </div>
          <div class={styles.resizer} ref={resizerRef}></div>
          <div class={styles.right}>
            <HTMLRender
              ref={htmlRenderRef}
              class={styles.renderContent}
              html={htmlRef.value}
            />
          </div>
        </div>
      </div>
    );
  },
});

