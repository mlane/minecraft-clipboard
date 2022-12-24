import { css } from '@emotion/react'
import { fontMinecraftEvenings } from 'src/constants'

const flexedColumn = css({
  display: 'flex',
  flexDirection: 'column',
})

const flexedColumnWithGap = (gap: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    gap,
  })

const flexedRow = css({
  display: 'flex',
  flexDirection: 'row',
})

const flexedRowWithGap = (gap: string) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    gap,
  })

const opacityActiveHover = css({
  opacity: 1,
  transitionDuration: '0.2s',
  transitionProperty: 'opacity',
  ':active,:hover': {
    opacity: 0.6,
  },
})

const typographyH1 = css({
  fontFamily: fontMinecraftEvenings,
  fontSize: '4.5rem',
  letterSpacing: '8px',
  lineHeight: '4.5rem',
})

export {
  flexedColumnWithGap,
  flexedRowWithGap,
  flexedColumn,
  flexedRow,
  fontMinecraftEvenings,
  opacityActiveHover,
  typographyH1,
}
