export function inputStringFormat(text: string) {
  const newTextTrimLeft = text.trimStart()
  const newTextReplace = newTextTrimLeft.replace(/\s{2,}/g, ' ')
  return newTextReplace
}
