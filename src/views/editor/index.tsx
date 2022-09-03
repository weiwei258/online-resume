import { defineComponent, ref, computed } from 'vue'
import Codemirror from 'codemirror-editor-vue3';
import { debounce } from 'lodash';
import MarkdownIt from 'markdown-it';
import MarkdownItContainer from 'markdown-it-container'
// theme
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/markdown/markdown.js';
import { md as initalMarkDowmStr } from './md'
const cmOptions = {
  mode: 'markdown', // Language mode
  // theme: 'dracula', // Theme
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 4, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true, // Display the style of the selected row
};

const markdownIt = new MarkdownIt();
markdownIt
  .use(MarkdownItContainer, 'left', {
    validate: function (params: any) {
      return params.trim().match(/^left$/);
    },
    render: function (tokens: any, idx: any) {
      if (tokens[idx].nesting === 1) {
        return '<div class="left">';
      } else {
        return '</div>\n';
      }
    }
  })
  .use(MarkdownItContainer, 'right', {
    validate: function (params: any) {
      return params.trim().match(/^right$/);
    },
    render: function (tokens: any, idx: any) {
      if (tokens[idx].nesting === 1) {
        return '<div class="right">';
      } else {
        return '</div>\n';
      }
    }
  })


export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    const md = ref(initalMarkDowmStr);
    const onChange = (val: string) => {
      md.value = val;
    };

    const html = computed(() => {
      if (md.value) {
        const token = markdownIt.parse(md.value).map(token => {

          return {
            ...token,
            attrs: [
              [
                "theme",
                "red-theme"
              ],
            ]
          }
        })
        return markdownIt.renderer.render(token);
      }
      return ''
    });

    return () => (
      <div style={{ display: 'flex' }}>
        <Codemirror
          style={{ width: '50%', marginRight: '20px' }}
          value={md.value}
          options={cmOptions}
          border
          placeholder="test placeholder"
          height="1500"
          width="100%"
          onChange={debounce(onChange, 300)}
        />
        <div v-html={html.value} style={{ width: '50%' }}></div>
      </div>
    );
  },
})
