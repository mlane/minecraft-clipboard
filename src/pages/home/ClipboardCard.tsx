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
import { ClipboardConfig } from 'src/constants'

interface ClipboardCardProps {
  clipboard: ClipboardConfig
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
      <button
        css={clipboardCardDeleteButtonCss}
        type='button'
        onClick={onButtonClick}
      >
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
