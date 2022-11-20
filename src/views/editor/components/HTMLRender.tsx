import { defineComponent, PropType, ref } from "vue";

import { jsPDF } from "jspdf";

interface HTMLRenderProps {
  html: string;
}

interface HTMLRenderExposed {
  exportPDF(): void;
  exportMd(): void;
  exportImage(): void;
}

const props = {
  html: {
    type: String as PropType<HTMLRenderProps['html']>,
    default: ''
  }
}
// HTML渲染器
const HTMLRender = defineComponent({
  props,
  setup(props, { expose }) {
    const viewRef = ref<HTMLDivElement>()

    const exportPDF = () => {
      const pdf = new jsPDF('p', 'pt');
      if (viewRef.value) {
        pdf.setFont('msyh');

        pdf.html(viewRef.value, {
          callback() {
            pdf.setFont('msyh')
            pdf.save()
          }
        })
      }
    }

    expose({
      exportPDF,
      exportMd: () => {

      },
      exportImage: () => {

      }
    } as HTMLRenderExposed);

    return () => <div ref={viewRef} v-html={props.html}></div>;
  },
});


export {
  HTMLRender,
  type HTMLRenderProps,
  type HTMLRenderExposed
}