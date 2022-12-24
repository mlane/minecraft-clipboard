import { css } from '@emotion/react'
import { fontMinecraftEvenings, spacing } from 'src/constants'

const flexedColumn = css({
  display: 'flex',
  flexDirection: 'column',
})

const flexedColumnWithGap = (gap: number) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap * spacing}px`,
  })

const flexedRow = css({
  display: 'flex',
  flexDirection: 'row',
})

const flexedRowWithGap = (gap: number) =>
  css({
    display: 'flex',
    flexDirection: 'row',
    gap: `${gap * spacing}px`,
  })

export {
  flexedColumnWithGap,
  flexedRowWithGap,
  flexedColumn,
  flexedRow,
  fontMinecraftEvenings,
}
