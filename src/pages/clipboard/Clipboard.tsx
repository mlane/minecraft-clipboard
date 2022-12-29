/** @jsxImportSource @emotion/react */
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSigninCheck } from 'reactfire'
import { ClipboardContainer } from './ClipboardContainer'

export const Clipboard: FC = () => {
  const { status, data: signInResult } = useSigninCheck()
  const navigate = useNavigate()
  const { signedIn, user } = signInResult ?? {}

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

  return <ClipboardContainer user={user} />
}
