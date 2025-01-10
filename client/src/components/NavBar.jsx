import React, { useContext } from 'react'
import { Context } from '../main'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Box from '@mui/material/Box'

const NavBar = observer(() => {
  const { user } = useContext(Context)

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <NavLink
            to='/shop'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            UMA-Shop
          </NavLink>
        </Typography>

        {/* Контейнер для кнопок */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {user.isAuth ? (
            <>
              <Button color='inherit'>Админ панель</Button>
              <Button color='inherit' sx={{ ml: 2 }}>
                Выйти
              </Button>
            </>
          ) : (
            <Button color='inherit' onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
})

export default NavBar

/* Кнопки находятся внутри компонента Box, который использует display: 'flex' и alignItems: 'center'. Это гарантирует, что кнопки будут выровнены по центру по вертикали и не будут смещать логотип.*/