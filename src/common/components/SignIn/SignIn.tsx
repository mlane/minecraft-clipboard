/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { buttonDefault } from 'src/common/styles'

export const SignIn: FC = () => {
  const onGoogleButtonClick = () => {
    console.log('button click')
  }
  return (
    <div>
      <button css={buttonDefault} type='button' onClick={onGoogleButtonClick}>
        Sign in with Google
      </button>
    </div>
  )
}
