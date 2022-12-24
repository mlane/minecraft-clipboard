interface FontFaceProps {
  fontDisplay?: string
  fontFamily: string
  fontStyle?: string
  fontWeight?: string
  src: string
}

export const fontFace = ({
  fontDisplay = 'swap',
  fontFamily,
  fontStyle = 'normal',
  fontWeight = 'normal',
  src,
}: FontFaceProps) => ({
  '@font-face': {
    fontDisplay,
    fontFamily,
    fontStyle,
    fontWeight,
    src,
  },
})
