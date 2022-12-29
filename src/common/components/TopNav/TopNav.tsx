/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import headsImage from 'src/assets/images/heads.gif'
import { flexedRow, imageDefault } from 'src/common/styles'
import { topNavHeight } from 'src/constants'

export const TopNav: FC = () => (
  <div css={topNavCss}>
    <Link to='/'>
      <img
        alt='Animated heads - Minecraft Clipboard'
        css={topNavImagecss}
        src={headsImage}
      />
    </Link>
  </div>
)

const topNavCss = css([
  flexedRow,
  {
    alignItems: 'center',
    height: `${topNavHeight}px`,
    justifyContent: 'center',
  },
])

const topNavImagecss = css([
  imageDefault,
  {
    maxWidth: '120px',
  },
])
