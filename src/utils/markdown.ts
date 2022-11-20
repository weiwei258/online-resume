import MarkdownIt from 'markdown-it'
import MarkdownItContainer from 'markdown-it-container'
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/markdown/markdown.js';
export const cmOptions = {
  mode: 'markdown', // Language mode
  // theme: 'dracula', // Theme
  lineNumbers: false, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 4, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  matchBrackets: true,
  theme: 'github-light',
  autoCloseBrackets: true,
  styleActiveLine: true, // Display the style of the selected row
}

const markdownIt = new MarkdownIt()

markdownIt
  .use(MarkdownItContainer, 'left', {
    validate: function (params: any) {
      return params.trim().match(/^left$/)
    },
    render: function (tokens: any, idx: any) {
      if (tokens[idx].nesting === 1) {
        return '<div> <div class="left">'
      } else {
        return '</div>\n'
      }
    },
  })
  .use(MarkdownItContainer, 'right', {
    validate: function (params: any) {
      return params.trim().match(/^right$/)
    },
    render: function (tokens: any, idx: any) {
      if (tokens[idx].nesting === 1) {
        return '<div class="right">'
      } else {
        return '</div></div>\n'
      }
    },
  })

export default markdownIt
