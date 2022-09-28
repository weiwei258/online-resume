import useResumeStore from "@/store/resume";
import { defineComponent, ref } from "vue";

const View = defineComponent({
  setup() {
    const store = useResumeStore();
    return () => <div v-html={store.html}></div>;
  },
});

export default View;
