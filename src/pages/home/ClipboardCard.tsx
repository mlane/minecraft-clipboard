/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import {
  buttonDefault,
  cardDefault,
  cardEmptyLink,
  typographyH3,
} from 'src/common/styles'

interface ClipboardCardProps {
  clipboard: {
    checklist: {
      name: string
      state: string
    }[]
    name?: string
  }
  clipboardId: string
  onDeleteClipboardButtonClick(clipboardId: string): unknown
}

export const ClipboardCard: FC<ClipboardCardProps> = ({
  clipboard,
  clipboardId,
  onDeleteClipboardButtonClick,
}) => {
  const { name } = clipboard ?? {}
  const onButtonClick = () => onDeleteClipboardButtonClick(clipboardId)

  return (
    <div css={cardDefault}>
      <Link css={cardEmptyLink} to={`/clipboard/${clipboardId}`} />
      <h3 css={typographyH3}>{name}</h3>
      <button css={clipboardCardDeleteButtonCss} onClick={onButtonClick}>
        Delete clipboard
      </button>
    </div>
  )
}

const clipboardCardDeleteButtonCss = css([
  buttonDefault,
  {
    position: 'relative',
  },
])
