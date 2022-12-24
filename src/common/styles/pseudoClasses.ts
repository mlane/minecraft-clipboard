import { css } from '@emotion/react'

export const opacityActiveHover = css({
  opacity: 1,
  transitionDuration: '0.2s',
  transitionProperty: 'opacity',
  ':active,:hover': {
    opacity: 0.6,
  },
})
