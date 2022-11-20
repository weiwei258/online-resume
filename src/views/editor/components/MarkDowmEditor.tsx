import { defineComponent, PropType } from "vue";
import Codemirror from "codemirror-editor-vue3";
import { cmOptions } from "@/utils/markdown";
import { debounce } from "lodash";

interface MarkDowmEditorProps {
  value: string;
  onChange(value: string): void;
}
const props= {
  value: {
    type: String as PropType<MarkDowmEditorProps['value']>,
    default: ''
  },
  /** 值变化 */
  onChange: {
    type: Function as PropType<MarkDowmEditorProps['onChange']>,
  },
}
const MarkDowmEditor = defineComponent({
  props,
  setup(props) {
    const { value, onChange = () => { } } = props

    return () => (
      <>
        <Codemirror
          value={value}
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

export {
  MarkDowmEditor,
  type MarkDowmEditorProps
}