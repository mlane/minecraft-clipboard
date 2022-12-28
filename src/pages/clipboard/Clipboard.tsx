/** @jsxImportSource @emotion/react */
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSigninCheck } from 'reactfire'
import { typographyH1 } from 'src/common/styles'

export const Clipboard: FC = () => {
  const { status, data: signInResult } = useSigninCheck()
  const navigate = useNavigate()
  const { signedIn } = signInResult ?? {}

  useEffect(() => {
    if (status !== 'loading' && !signedIn) {
      navigate('/', {
        replace: true,
      })
    }
  }, [status, signInResult])

  if (status === 'loading') {
    return null
  }

  return (
    <div>
      <h1 css={typographyH1}>Clipboard</h1>
    </div>
  )
}
