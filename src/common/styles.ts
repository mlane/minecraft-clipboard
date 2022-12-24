import { css } from '@emotion/react'

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
  fontSize: '5.5rem',
  lineHeight: '5.5rem',
})

export {
  flexedColumnWithGap,
  flexedRowWithGap,
  flexedColumn,
  flexedRow,
  opacityActiveHover,
  typographyH1,
}
