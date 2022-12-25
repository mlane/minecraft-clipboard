import { FC, ReactNode } from 'react'
import { getAuth } from 'firebase/auth'
import { AuthProvider, useFirebaseApp } from 'reactfire'

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const firebaseApp = useFirebaseApp()
  const auth = getAuth(firebaseApp)

  return <AuthProvider sdk={auth}>{children}</AuthProvider>
}
