import { FC, ReactNode } from 'react'
import { FirebaseAppProvider } from 'reactfire'
import { UserProvider } from './UserProvider'
import { userConfig } from './userConfig'

interface UserAppProviderProps {
  children: ReactNode
}

export const UserAppProvider: FC<UserAppProviderProps> = ({ children }) => (
  <FirebaseAppProvider firebaseConfig={userConfig}>
    <UserProvider>{children}</UserProvider>
  </FirebaseAppProvider>
)
