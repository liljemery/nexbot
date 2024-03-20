'use client';
import { useState } from 'react';
import 'animate.css'

//ROUTER IMPORTS
import { BrowserRouter, Routes, Route }from 'react-router-dom'


// COMPONENTS IMPORTS
import Jumbo from './components/organanisms/Jumbo';
import LogSignInPage from './components/pages/LogSignInPage';
import ChatPage from './components/pages/ChatPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Jumbo/>}/>
            <Route path='/login' element={<LogSignInPage/>}/>
            <Route path='/chat' element={<ChatPage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
