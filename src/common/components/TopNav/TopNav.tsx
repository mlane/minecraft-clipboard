/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { flexedRow } from 'src/common/styles'
import { topNavHeight } from 'src/constants'

export const TopNav: FC = () => <div css={topNavCss}>TopNav</div>

const topNavCss = css([
  flexedRow,
  {
    alignItems: 'center',
    height: `${topNavHeight}px`,
    justifyContent: 'center',
  },
])
