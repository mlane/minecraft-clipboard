import { css, Theme } from '@emotion/react'
import { colors } from '../components/ThemeProvider'
import { flexedRow } from './flex'
import { opacityActiveHover } from './pseudoClasses'

const buttonBase = css([
  flexedRow,
  opacityActiveHover,
  {
    alignItems: 'center',
    appearance: 'none',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    fontSize: '1.125rem',
    height: '40px',
    justifyContent: 'center',
    lineHeight: '2rem',
    margin: '0 auto',
    maxWidth: '200px',
    outline: 0,
    width: '100%',
  },
])

export const buttonDefault = css([
  buttonBase,
  {
    backgroundColor: colors.black,
    color: colors.white,
  },
])
