/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { GithubSvg } from 'src/common/icons'
import { flexedRow, opacityActiveHover } from 'src/common/styles'
import { footerHeight, githubLink } from 'src/constants'

export const Footer: FC = () => (
  <div css={footerCss}>
    <a
      css={footerGithubLinkCss}
      href={githubLink}
      rel='noreferrer'
      target='_blank'
    >
      <GithubSvg />
    </a>
  </div>
)

const footerCss = css([
  flexedRow,
  {
    alignItems: 'center',
    height: `${footerHeight}px`,
    justifyContent: 'center',
  },
])

const footerGithubLinkCss = css([flexedRow, opacityActiveHover])
