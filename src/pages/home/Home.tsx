/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { useSigninCheck } from 'reactfire'
import { SignIn } from 'src/common/components'
import { SignOut } from 'src/common/components/SignOut'
import { flexedColumnWithGap, typographyH1 } from 'src/common/styles'
import { Clipboards } from './Clipboards'

export const Home: FC = () => {
  const { status, data: signinResult } = useSigninCheck()

  if (status === 'loading') {
    return null
  }

  const { signedIn, user } = signinResult ?? {}

  return (
    <div css={homeCss}>
      <h1 css={typographyH1}>
        Minecraft
        <br />
        Clipboard
      </h1>
      {signedIn ? (
        <>
          <Clipboards user={user} />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  )
}

const homeCss = css([flexedColumnWithGap(1)])
