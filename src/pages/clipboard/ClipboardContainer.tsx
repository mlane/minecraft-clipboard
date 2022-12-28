/** @jsxImportSource @emotion/react */
import { FC, useEffect } from 'react'
import { User } from 'firebase/auth'
import { doc, getFirestore } from 'firebase/firestore'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFirestoreDocData } from 'reactfire'
import { flexedColumnWithGap, typographyH1 } from 'src/common/styles'

interface ClipboardContainerProps {
  user: User
}

export const ClipboardContainer: FC<ClipboardContainerProps> = ({ user }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { uid } = user ?? {}
  const firestore = getFirestore()
  const ref = doc(firestore, 'users', uid)
  const { status, data: userData } = useFirestoreDocData(ref) ?? {}
  const { clipboards } = userData ?? {}
  const clipboardId = pathname.replace('/clipboard/', '')
  const { checklist, name } = clipboards?.[clipboardId] ?? {}

  useEffect(() => {
    if (
      status !== 'loading' &&
      typeof userData?.clipboards?.[clipboardId] === 'undefined'
    ) {
      navigate('/', {
        replace: true,
      })
    }
  }, [status, userData])

  if (status === 'loading') {
    return null
  }

  return (
    <div css={clipboardCss}>
      <h1 css={typographyH1}>{name}</h1>
      <div>Checklist length: {checklist.length}</div>
    </div>
  )
}

const clipboardCss = flexedColumnWithGap(4)
