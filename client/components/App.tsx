import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'

function App() {
  return (
    <>
      <h2>App</h2>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
