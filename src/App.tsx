import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Footer, Main, ThemeProvider, TopNav } from './common/components'
import { UserAppProvider } from './config/user'

export const App: FC = () => (
  <UserAppProvider>
    <ThemeProvider>
      <BrowserRouter>
        <TopNav />
        <Main />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </UserAppProvider>
)
