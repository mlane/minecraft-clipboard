import { css } from '@emotion/react'
import { spacing } from 'src/constants'

export const containerLg = (disablePadding = false) =>
  css({
    margin: '0 auto',
    maxWidth: '1200px',
    padding: !disablePadding && `0 ${spacing * 4}px`,
    width: '100%',
  })
