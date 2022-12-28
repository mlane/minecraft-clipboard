/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import isEmpty from 'lodash.isempty'
import { useFirestoreDocData } from 'reactfire'
import {
  buttonDefault,
  flexedColumnWithGap,
  flexedRowWithGap,
} from 'src/common/styles'
import { generateClipboard } from 'src/utils'
import { generateClipboardId } from 'src/utils/clipboardsUtils'
import { ClipboardCard } from './ClipboardCard'

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
      console.log('setDoc: create clipboards')
      setDoc(ref, {
        clipboards: {},
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
        const clipboardId = generateClipboardId()
        clipboards[clipboardId] = generateClipboard()
        console.log('setDoc: create clipboard')
        setDoc(ref, {
          clipboards,
        })
      }
      setTimeout(() => setIsButtonDisabled(false), 3000)
    }
  }

  return (
    <div css={clipboardsCss}>
      {!isEmpty(clipboards) && (
        <div css={clipboardsGridCss}>
          {Object.keys(clipboards).map((key: string) => (
            <ClipboardCard
              key={key}
              clipboard={clipboards[key]}
              clipboardId={key}
            />
          ))}
        </div>
      )}
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
