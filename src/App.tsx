import { FC } from 'react'
import { Footer, Main, ThemeProvider, TopNav } from './common/components'
import { UserAppProvider } from './config/user'

export const App: FC = () => (
  <UserAppProvider>
    <ThemeProvider>
      <TopNav />
      <Main />
      <Footer />
    </ThemeProvider>
  </UserAppProvider>
)
