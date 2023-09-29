// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login'
import SignUp from './signUp'
import './signUp.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/create" element={<SignUp/>} />

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
