import tinyColor from 'tinycolor2'

export default function formatColor(hexadecimalColor: string) {
  const color = tinyColor(hexadecimalColor)

  return color.isLight() ? '#030517' : '#FAFAFA'
}
