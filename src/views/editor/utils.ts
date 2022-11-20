import markdownIt from '@/utils/markdown'
import token from 'markdown-it/lib/token'

interface TransformHtmlFunc {
  (
    mdStr: string | undefined,
    attrs: Record<string, string>
  ): string
}
const transformHtmlFunc: TransformHtmlFunc = (
  mdStr,
  attrs
) => {
  const processAttrs = Object.entries(attrs)
  if (!mdStr) return ''
  const tokens = markdownIt
    .parse(mdStr, undefined)
    .map(token => {
      return {
        ...token,
        attrs: processAttrs,
      }
    }) as token[]

  return markdownIt.renderer.render(
    tokens,
    {},
    undefined
  )
}

export { transformHtmlFunc }
