import { Theme } from '@emotion/react'
import facepaint from 'facepaint'
import { colors } from './colors'

const mq = facepaint([
  '@media(min-width: 600px)',
  '@media(min-width: 900px)',
  '@media(min-width: 1200px)',
  '@media(min-width: 1536px)',
])

export const theme: Theme = {
  colors,
  mq,
}
