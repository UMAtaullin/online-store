import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { Context } from '../main'


const AppRouter = () => {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
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

