import { Outlet } from 'react-router'
import SideBar from './components/SideBar'
import './index.css'
import Header from './components/Header'

function App() {
  return (
    <div className='h-full min-h-screen flex'>
      <nav>
        <Header/>
      </nav>
      <aside>
        <SideBar/>
      </aside>
      <main className='w-full'>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
