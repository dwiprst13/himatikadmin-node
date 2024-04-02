import { useState } from 'react'
import './App.css'
import SideBar from './parts/SideBar'
import HomePage from './views/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
