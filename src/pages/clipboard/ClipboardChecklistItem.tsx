/** @jsxImportSource @emotion/react */
import { FC, FormEvent } from 'react'
import { css } from '@emotion/react'
import {
  flexedRowWithGap,
  inputCheckbox,
  inputCheckboxIcon,
  inputCheckboxWrapper,
  inputText,
} from 'src/common/styles'
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
  const onNameChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget ?? {}
    onChange({
      index: index,
      type: 'name',
      value,
    })
  }

  const onStateChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget ?? {}
    const updatedValue =
      value === 'default'
        ? 'checked'
        : value === 'checked'
        ? 'disabled'
        : 'default'
    onChange({
      index: index,
      type: 'state',
      value: updatedValue,
    })
  }

  return (
    <div css={clipboardChecklistItemCss}>
      <div css={inputCheckboxWrapper}>
        <input
          css={inputCheckbox}
          data-cancelled={state === 'disabled'}
          data-checked={state === 'checked'}
          defaultValue={state}
          name='state'
          tabIndex={-1}
          type='checkbox'
          onChange={onStateChange}
        />
        <span css={inputCheckboxIcon} />
      </div>
      <input
        css={inputText}
        defaultValue={name}
        name='name'
        type='text'
        onChange={onNameChange}
      />
    </div>
  )
}

const clipboardChecklistItemCss = css([flexedRowWithGap(2)])
