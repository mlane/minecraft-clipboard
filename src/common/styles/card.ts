import { css, Theme } from '@emotion/react'
import { flexedColumnWithGap } from './flex'

const cardBase = css([
  flexedColumnWithGap(2),
  {
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
    width: '100%',
  },
])

export const cardEmptyLink = css({
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
})

export const cardDefault = ({ colors }: Theme) =>
  css([
    cardBase,
    {
      backgroundColor: colors.white,
    },
  ])
