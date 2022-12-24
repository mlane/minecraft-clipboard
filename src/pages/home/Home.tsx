/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { SignIn } from 'src/common/components'
import { flexedColumnWithGap, typographyH1 } from 'src/common/styles'

export const Home: FC = () => (
  <div css={homeCss}>
    <h1 css={typographyH1}>Home</h1>
    <SignIn />
  </div>
)

const homeCss = css([flexedColumnWithGap(1)])
