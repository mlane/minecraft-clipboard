/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { containerLg, flexedRow } from 'src/common/styles'
import { footerHeight, topNavHeight } from 'src/constants/stylesConstants'
import { PageRoutes } from 'src/pages'

export const Main: FC = () => (
  <main css={mainCss}>
    <PageRoutes />
  </main>
)

const mainCss = css([
  containerLg(),
  flexedRow,
  {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: `calc(100vh - ${footerHeight + topNavHeight}px)`,
  },
])
