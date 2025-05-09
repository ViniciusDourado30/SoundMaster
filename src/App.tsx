import { Outlet } from 'react-router'
import SideBar from './components/SideBar'
import './index.css'

function App() {

  return (
    <div className='h-full min-h-screen flex gap-4'>
      <aside>
        <SideBar />
      </aside>
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default App
