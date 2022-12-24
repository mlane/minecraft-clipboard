import { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { Global } from './Global'
import { theme } from './theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global />
    {children}
  </EmotionThemeProvider>
)
