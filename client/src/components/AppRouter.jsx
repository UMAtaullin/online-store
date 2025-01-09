import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
  const isAuth = true
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => {
          return <Route key={path} exact path={path} element={<Component />} />
        })}
      {publicRoutes.map(({ path, Component }) => {
        return <Route key={path} exact path={path} element={<Component />} />
      })}
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default AppRouter

