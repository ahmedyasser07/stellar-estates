import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import LogosSlider from './LogoSlider'
import ConfirmationPage from './ConfirmationPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/confirm' element={<ConfirmationPage/>}/>
    </Routes>
    
    
  )
}

export default App
