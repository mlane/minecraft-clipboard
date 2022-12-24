import { FC } from 'react'
import { css, Global as EmotionGlobal } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import minecraftEveningsFont from 'src/assets/fonts/minecraftEvenings.woff'
import { colors } from './colors'

export const Global: FC = () => <EmotionGlobal styles={globalCss} />

const globalCss = css([
  emotionNormalize,
  {
    '*,*::after,*::before': {
      boxSizing: 'border-box',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebKitTextSizeAdjust: '100%',
    },
    '@font-face': {
      fontDisplay: 'swap',
      fontFamily: 'Minecraft Evenings',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: `url(${minecraftEveningsFont}) format('woff')`,
    },
    'body,html': {
      background: colors.white,
      color: colors.body,
      fontFamily: 'Minecraft Evenings, Helvetica, Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '18px',
      minHeight: '100%',
    },
    'body,html,h1,h2,h3,h4,h5,h6,p': {
      margin: 0,
      padding: 0,
    },
  },
])
