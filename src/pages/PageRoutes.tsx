import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Clipboard } from './clipboard'
import { Home } from './home'

export const PageRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Clipboard />} path='clipboard/:clipboardId' />
      <Route element={<Home />} path='*' />
    </Routes>
  </BrowserRouter>
)
