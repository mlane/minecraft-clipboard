import { css, Theme } from '@emotion/react'
import { colors } from '../components/ThemeProvider'
import { flexedRow } from './flex'
import { opacityActiveHover } from './pseudoClasses'

const linkBase = css([
  flexedRow,
  opacityActiveHover,
  {
    appearance: 'none',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: '1.125rem',
    outline: 0,
  },
])

export const linkDefault = css([
  linkBase,
  {
    color: colors.black,
  },
])
