
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ConatactPage } from './page/ContactPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<ConatactPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
