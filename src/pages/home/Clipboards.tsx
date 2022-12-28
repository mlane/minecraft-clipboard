/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useFirestoreDocData } from 'reactfire'
import {
  buttonDefault,
  flexedColumnWithGap,
  flexedRowWithGap,
} from 'src/common/styles'
import { generateClipboard } from 'src/utils'
import { ClipboardCard, ClipboardCardClipboardProps } from './ClipboardCard'

interface ClipboardsProps {
  user: User
}

export const Clipboards: FC<ClipboardsProps> = ({ user }) => {
  const { uid } = user ?? {}

  const firestore = getFirestore()
  const ref = doc(firestore, 'users', uid)
  const { status, data: userData } = useFirestoreDocData(ref) ?? {}
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  useEffect(() => {
    if (status !== 'loading' && typeof userData?.clipboards === 'undefined') {
      setDoc(ref, {
        clipboards: [],
      })
    }
  }, [status, userData])

  if (status === 'loading') {
    return null
  }

  const { clipboards } = userData ?? {}

  const onButtonClick = () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true)
      if (typeof clipboards === 'object') {
        const clipboardsClone = clipboards.slice()
        clipboardsClone.push(generateClipboard())
        setDoc(ref, {
          clipboards: clipboardsClone,
        })
      }
      setTimeout(() => setIsButtonDisabled(false), 3000)
    }
  }

  return (
    <div css={clipboardsCss}>
      <div css={clipboardsGridCss}>
        {clipboards &&
          clipboards.map((clipboard: ClipboardCardClipboardProps) => (
            <ClipboardCard key={clipboard?.id} clipboard={clipboard} />
          ))}
      </div>
      <button
        css={buttonDefault}
        disabled={isButtonDisabled}
        type='button'
        onClick={onButtonClick}
      >
        Create clipboard
      </button>
    </div>
  )
}

const clipboardsCss = flexedColumnWithGap(4)
const clipboardsGridCss = flexedRowWithGap(4)
