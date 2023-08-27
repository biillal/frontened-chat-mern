import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import ChatePage from './pages/chats/ChatePage'
function App() {
  const {user} = useSelector((state)=>state.auth)
  return (
    <>
      <div className='App '>
      <ToastContainer theme='colored' position='top-center' />
        <BrowserRouter>
        <Routes>
          <Route path='/' element={!user ? <Home/> : <Navigate to="/chatPage"/>}/>
                 
          <Route path='chatPage' element={user ? <ChatePage/> : <Navigate to="/"/>}/>                 
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
