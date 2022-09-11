import { onMounted, Ref, ref } from "vue";
export default function useResizer(min = 600) {
  let isResize = false;
  const clientX = ref(min);
  const resizerRef = ref();
  onMounted(() => {
    resizerRef.value.addEventListener("mousedown", (e: MouseEvent) => {
      isResize = true;
    });
    document.addEventListener("mouseup", (e: MouseEvent) => {
      isResize = false;
    });
    document.addEventListener("mousemove", (e) => {
      if (!isResize) return;
      if (e.clientX < min) return;
      clientX.value = e.clientX;
    });
  });

  return { clientX, resizerRef };
}
