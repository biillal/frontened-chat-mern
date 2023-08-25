import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import ChatePage from './pages/home/ChatePage'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
function App() {
  const {user} = useSelector((state)=>state.auth)
  return (
    <>
      <div className='App '>
      <ToastContainer theme='colored' position='top-center' />
        <BrowserRouter>
        <Routes>
          <Route index element={user ? <ChatePage/> : <Home/>}/>
                 
          <Route path='chatPage' element={user ? <ChatePage/> : <Home/>}/>                 
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
