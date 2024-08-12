import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import LogosSlider from './LogoSlider'
import ConfirmationPage from './ConfirmationPage'
import { Route, Routes } from 'react-router-dom'
import Land from './land'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Land/>}/>
    </Routes>
    
    
  )
}

export default App
