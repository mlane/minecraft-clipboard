/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { useAuth } from 'reactfire'
import { linkDefault } from 'src/common/styles'

export const SignOut: FC = () => {
  const auth = useAuth()

  const onButtonClick = () =>
    auth.signOut().then(() => console.log('Signed out'))

  return (
    <button css={linkDefault} type='button' onClick={onButtonClick}>
      Sign out
    </button>
  )
}
