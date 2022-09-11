import useResumeStore from "@/store/resume";
import { defineComponent } from "vue";

const View = defineComponent({
  setup() {
    const store = useResumeStore();
    return () => <div v-html={store.html} id="md-content"></div>;
  },
});

export default View;
