/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { flexedColumnWithGap, linkDefault } from 'src/common/styles'
import {
  ChangeClipboardChecklistItemConfig,
  ClipboardChecklistItemNameConfig,
  ClipboardChecklistItemStateConfig,
} from 'src/constants'

interface ClipboardChecklistItemProps {
  index: number
  name: ClipboardChecklistItemNameConfig
  state: ClipboardChecklistItemStateConfig
  onChange(data: ChangeClipboardChecklistItemConfig): unknown
}

export const ClipboardChecklistItem: FC<ClipboardChecklistItemProps> = ({
  index,
  name,
  state,
  onChange,
}) => {
  const onNameChange = () =>
    onChange({
      index: index,
      type: 'name',
      value: `#${index}: name`,
    })

  const onStateChange = () =>
    onChange({
      index: index,
      type: 'state',
      value: 'checked',
    })

  return (
    <div css={clipboardChecklistItemCss}>
      <button css={linkDefault} type='button' onClick={onNameChange}>
        Name: {name}
      </button>
      <button css={linkDefault} type='button' onClick={onStateChange}>
        State: {state}
      </button>
    </div>
  )
}

const clipboardChecklistItemCss = css([flexedColumnWithGap(0), {}])
