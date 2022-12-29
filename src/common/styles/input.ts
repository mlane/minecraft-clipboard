import { css } from '@emotion/react'
import { colors } from '../components/ThemeProvider'
import { flexedRow } from './flex'

const inputBase = css([
  flexedRow,
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: colors.white,
    border: 0,
    height: '60px',
    justifyContent: 'center',
    outline: 0,
    width: '100%',
  },
])

const inputCheckbox = css([
  inputBase,
  {
    color: colors.black,
    width: '60px',
    content: '"example"',
    '&[data-checked="true"] + span::before': {
      content: '"\\2713"',
    },
    '&[data-cancelled=true] + span::before': {
      color: colors.error,
      content: '"\\2715"',
    },
  },
])

const inputCheckboxIcon = css([
  {
    display: 'block',
    pointerEvents: 'none',
    '&,::before': {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    '::before': {
      content: '""',
      lineHeight: '60px',
      fontSize: '3.5rem',
    },
  },
])

const inputCheckboxWrapper = css({
  position: 'relative',
})

const inputText = css([
  inputBase,
  {
    color: colors.black,
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    padding: '0 20px',
  },
])

export { inputCheckbox, inputCheckboxIcon, inputCheckboxWrapper, inputText }
