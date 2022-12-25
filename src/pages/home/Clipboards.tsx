/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { User } from 'firebase/auth'
import { typographyH1 } from 'src/common/styles'
import { ClipboardCard } from './ClipboardCards'

interface ClipboardsProps {
  user: User
}

export const Clipboards: FC<ClipboardsProps> = ({ user }) => {
  const { uid } = user ?? {}

  return (
    <div>
      <h1 css={typographyH1}>Clipboards</h1>
      <ClipboardCard />
    </div>
  )
}
