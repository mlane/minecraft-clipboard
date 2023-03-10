/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuth } from 'reactfire'
import { buttonDefault } from 'src/common/styles'

export const SignIn: FC = () => {
  const auth = useAuth()

  const onButtonClick = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    console.log('Signed in')
  }

  return (
    <div>
      <button css={buttonDefault} type='button' onClick={onButtonClick}>
        Sign in with Google
      </button>
    </div>
  )
}
