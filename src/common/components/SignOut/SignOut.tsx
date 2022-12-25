/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { useAuth } from 'reactfire'
import { buttonDefault } from 'src/common/styles'

export const SignOut: FC = () => {
  const auth = useAuth()

  const onButtonClick = () =>
    auth.signOut().then(() => console.log('Signed out'))

  return (
    <div>
      <button css={buttonDefault} type='button' onClick={onButtonClick}>
        Sign out
      </button>
    </div>
  )
}
