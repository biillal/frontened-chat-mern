import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import ChatePage from './pages/home/ChatePage'
function App() {

  return (
    <>
      <div className='App '>
        <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
                 
          <Route path='/chatPage' element={<ChatePage/>}/>                 
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
