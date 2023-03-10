/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { useSigninCheck } from 'reactfire'
import { SignOut } from 'src/common/components'
import { GithubSvg } from 'src/common/icons'
import {
  flexedRow,
  flexedRowWithGap,
  opacityActiveHover,
} from 'src/common/styles'
import { footerHeight, githubLink } from 'src/constants'

export const Footer: FC = () => {
  const { status, data: signInResult } = useSigninCheck()
  const { signedIn } = signInResult ?? {}

  if (status === 'loading') {
    return null
  }

  return (
    <div css={footerCss}>
      <a
        css={footerGithubLinkCss}
        href={githubLink}
        rel='noreferrer'
        target='_blank'
      >
        <GithubSvg />
      </a>
      {signedIn && <SignOut />}
    </div>
  )
}

const footerCss = css([
  flexedRowWithGap(2),
  {
    alignItems: 'center',
    height: `${footerHeight}px`,
    justifyContent: 'center',
  },
])

const footerGithubLinkCss = css([flexedRow, opacityActiveHover])
