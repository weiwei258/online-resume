import Codemirror from "codemirror-editor-vue3";
import { debounce } from "lodash";
import { defineComponent } from "vue";
import { cmOptions } from "@/utils/markdown";
import useResumeStore from "@/store/resume";

const Editor = defineComponent({
  setup() {
    const store = useResumeStore();
    const onChange = (val: string) => {
      store.changeMarkdown(val);
    };
    return () => (
      <>
        <Codemirror
          value={store.md}
          options={cmOptions}
          placeholder="test placeholder"
          height="100%"
          width="100%"
          onChange={debounce(onChange, 300)}
        />
      </>
    );
  },
});

export default Editor;
