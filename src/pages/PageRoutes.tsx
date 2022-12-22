import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './home'

export const PageRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Home />} path='*' />
    </Routes>
  </BrowserRouter>
)
