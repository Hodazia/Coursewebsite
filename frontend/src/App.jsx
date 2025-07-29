
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
