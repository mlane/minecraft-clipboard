/** @jsxImportSource @emotion/react */
import { FC } from 'react'

interface ClipboardCardProps {
  clipboard: {
    checklist: {
      name: string
      state: string
    }[]
    name?: string
  }
  clipboardId: string
}

export const ClipboardCard: FC<ClipboardCardProps> = ({
  clipboard,
  clipboardId,
}) => {
  const { checklist, name } = clipboard ?? {}
  return (
    <div>
      {name && <div>{name}</div>}
      <div>ID: {clipboardId}</div>
      <div>{checklist && <div>Checklist: {checklist.length}</div>}</div>
    </div>
  )
}
