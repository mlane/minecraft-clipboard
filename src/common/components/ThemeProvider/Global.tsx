import { FC } from 'react'
import { css, Global as EmotionGlobal } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import minecraftEveningsFont from 'src/assets/fonts/minecraftEvenings.woff'
import ubuntuLightFont from 'src/assets/fonts/ubuntuLight.woff'
import ubuntuMediumFont from 'src/assets/fonts/ubuntuMedium.woff'
import { fontUbuntu } from 'src/constants'
import { colors } from './colors'
import { fontFace } from './fontFace'

export const Global: FC = () => <EmotionGlobal styles={globalCss} />

const globalCss = css([
  emotionNormalize,
  fontFace({
    fontFamily: 'Minecraft Evenings',
    src: `url(${minecraftEveningsFont}) format('woff')`,
  }),
  fontFace({
    fontFamily: 'Ubuntu',
    src: `url(${ubuntuLightFont}) format('woff')`,
  }),
  fontFace({
    fontFamily: 'Ubuntu',
    fontWeight: '700',
    src: `url(${ubuntuMediumFont}) format('woff')`,
  }),
  {
    '*,*::after,*::before': {
      boxSizing: 'border-box',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      WebKitTextSizeAdjust: '100%',
    },
    'body,html': {
      background: colors.cream,
      color: colors.body,
      fontFamily: fontUbuntu,
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
