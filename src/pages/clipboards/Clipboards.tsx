/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { typographyH1 } from 'src/common/styles'
import { ClipboardCard } from './ClipboardCards'

export const Clipboards: FC = () => (
  <div>
    <h1 css={typographyH1}>Clipboards</h1>
    <ClipboardCard />
  </div>
)
