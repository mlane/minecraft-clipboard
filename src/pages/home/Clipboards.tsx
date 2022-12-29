/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from 'react'
import { css, Theme } from '@emotion/react'
import { User } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import isEmpty from 'lodash.isempty'
import { useFirestoreDocData } from 'reactfire'
import { buttonDefault, flexedColumnWithGap } from 'src/common/styles'
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
  const { clipboards } = userData ?? {}
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

  const onCreateClipboardButtonClick = () => {
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

  const onDeleteClipboardButtonClick = (clipboardId: string) => {
    if (typeof clipboards === 'object') {
      delete clipboards[clipboardId]
      console.log('setDoc: delete clipboard')
      setDoc(ref, {
        clipboards,
      })
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
              onDeleteClipboardButtonClick={onDeleteClipboardButtonClick}
            />
          ))}
        </div>
      )}
      <button
        css={buttonDefault}
        disabled={isButtonDisabled}
        type='button'
        onClick={onCreateClipboardButtonClick}
      >
        Create clipboard
      </button>
    </div>
  )
}

const clipboardsCss = flexedColumnWithGap(4)
const clipboardsGridCss = ({ mq }: Theme) =>
  css([
    flexedColumnWithGap(4),
    mq({
      flexDirection: ['column', 'column', 'row'],
    }),
  ])
