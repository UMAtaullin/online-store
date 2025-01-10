import React, { useContext } from 'react'
import { Context } from '../main'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'


const NavBar = observer(() => {
  const {user} = useContext(Context)
  return (
    <Navbar bg='dark' data-bs-theme='dark'>
      <Container>
        <NavLink style={{ color: 'white' }} to='/shop'>
          UMA
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto'>
            <Button>Админ панель</Button>
            <Button className='ms-2'>Выйти</Button>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar