import { css, Theme } from '@emotion/react'
import { fontMinecraftEvenings } from './flex'

export const typographyH1 = ({ mq }: Theme) =>
  css([
    {
      fontFamily: fontMinecraftEvenings,
    },
    mq({
      fontSize: ['2rem', '2rem', '3.5rem'],
      letterSpacing: ['2px', '2px', '8px'],
      lineHeight: ['2rem', '2rem', '3.5rem'],
    }),
  ])

export const typographyH3 = ({ mq }: Theme) =>
  css([
    {
      fontWeight: '700',
    },
    mq({
      fontSize: ['1.5rem', '1.5rem', '2rem'],
      lineHeight: ['1.5rem', '1.5rem', '2rem'],
    }),
  ])
