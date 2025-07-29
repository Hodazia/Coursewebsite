
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ConatactPage } from './page/ContactPage'
import { CodePlaygroundpage } from './page/CodePlaygroundpage'
import { LandingPage } from './page/LandingPage'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact' element={<ConatactPage />}/>
          <Route path='/playground' element={<CodePlaygroundpage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
