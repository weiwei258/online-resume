import { defineStore } from "pinia";
import { computed, ref } from "vue";
import markdownIt from "@/utils/markdown";

const useResumeStore = defineStore("resume", () => {
  const md = ref("");
  const html = computed(() => {
    if (md.value) {
      // @ts-ignore
      const token = markdownIt.parse(md.value).map((token) => {
        return {
          ...token,
          attrs: [["theme", "red-theme"]],
        };
      });
      // @ts-ignore
      return markdownIt.renderer.render(token);
    }
    return "";
  });
  const changeMarkdown = (value: string) => {
    md.value = value;
  };
  return { md, html, changeMarkdown };
});

export default useResumeStore;
