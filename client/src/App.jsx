import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import Auth from './pages/Auth'

function App() {

  return (
    <>
      <NavBar/>
      <Auth/>
      <AppRouter />
    </>
  )
}

export default App
