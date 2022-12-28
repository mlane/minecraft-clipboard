/** @jsxImportSource @emotion/react */
import { FC } from 'react'

export interface ClipboardCardClipboardProps {
  checklist: {
    name: string
    state: string
  }[]
  id: string
  name?: string
}

interface ClipboardCardProps {
  clipboard: ClipboardCardClipboardProps
}

export const ClipboardCard: FC<ClipboardCardProps> = ({ clipboard }) => (
  <div>ClipboardCard</div>
)
