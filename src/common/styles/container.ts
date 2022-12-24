import { css } from '@emotion/react'
import { spacing } from 'src/constants'

export const containerLg = (disablePadding = false) =>
  css({
    margin: '0 auto',
    maxWidth: '1200px',
    padding: !disablePadding && `0 ${spacing * 2}px`,
    width: '100%',
  })

export const containerSm = (disablePadding = false) =>
  css({
    margin: '0 auto',
    maxWidth: '800px',
    padding: !disablePadding && `0 ${spacing * 2}px`,
    width: '100%',
  })
