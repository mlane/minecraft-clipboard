import { FC } from 'react'
import { Footer, Main, ThemeProvider, TopNav } from './common/components'

export const App: FC = () => (
  <ThemeProvider>
    <TopNav />
    <Main />
    <Footer />
  </ThemeProvider>
)
