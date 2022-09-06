export default function useThemeStyle() {
  let style = document.querySelector('style#md-style')
  if (!style) {
    style = document.createElement('style')
    style.id = 'md-style'
  }
  document.head.appendChild(style)
  return style
}
