/** @jsxImportSource @emotion/react */
import { FC, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { User } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import isEmpty from 'lodash.isempty'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFirestoreDocData } from 'reactfire'
import {
  buttonDefault,
  flexedColumnWithGap,
  typographyH1,
} from 'src/common/styles'
import {
  ChangeClipboardChecklistItemConfig,
  ClipboardConfig,
  initialClipboardValue,
} from 'src/constants'
import { ClipboardChecklistItem } from './ClipboardChecklistItem'

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
  const [clipboard, setClipboard] = useState<ClipboardConfig>(
    initialClipboardValue
  )
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const { checklist, name } = clipboard ?? {}

  useEffect(() => {
    if (status !== 'loading') {
      const currentClipboard = userData?.clipboards?.[clipboardId]
      if (currentClipboard === 'undefined') {
        navigate('/', {
          replace: true,
        })
      } else {
        setClipboard(currentClipboard)
      }
    }
  }, [status, userData])

  if (status === 'loading') {
    return null
  }

  const onChangeClipboardChecklistItem = (
    data: ChangeClipboardChecklistItemConfig
  ) => {
    const { index, type, value } = data ?? {}
    const currentChecklistItem = checklist?.[index]
    if (!isEmpty(currentChecklistItem)) {
      currentChecklistItem[type === 'name' ? 'name' : 'state'] = value
      setClipboard({
        ...clipboard,
      })
    }
  }

  const onUpdateClipboardButtonClick = async () => {
    if (!isButtonDisabled) {
      setIsButtonDisabled(true)
      clipboards[clipboardId] = clipboard
      console.log('setDoc: update clipboard')
      await setDoc(ref, {
        clipboards,
      })
      setTimeout(() => setIsButtonDisabled(false), 3000)
    }
  }

  return (
    <div css={clipboardContainerCss}>
      <h1 css={typographyH1}>{name}</h1>
      {checklist.map(({ name, state }, index) => (
        <ClipboardChecklistItem
          key={index}
          index={index}
          name={name}
          state={state}
          onChange={onChangeClipboardChecklistItem}
        />
      ))}
      <button
        css={buttonDefault}
        disabled={isButtonDisabled}
        type='button'
        onClick={onUpdateClipboardButtonClick}
      >
        Update clipboard
      </button>
    </div>
  )
}

const clipboardContainerCss = css([
  flexedColumnWithGap(2),
  {
    textAlign: 'center',
    width: '100%',
  },
])
