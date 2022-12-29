import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Clipboard } from './clipboard'
import { Home } from './home'

export const PageRoutes: FC = () => (
  <Routes>
    <Route element={<Home />} path='*' />
    <Route element={<Clipboard />} path='clipboard/:clipboardId' />
  </Routes>
)
