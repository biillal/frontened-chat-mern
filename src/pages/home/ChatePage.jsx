import React, { useEffect } from 'react'
import './chatPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/apiCalls/authApiCalls'
import { useNavigate } from 'react-router-dom'

function ChatePage() {
  const navigate = useNavigate()

    const logoutuser = () => {
      dispatch(logoutUser())
      navigate('/')
    }

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='bg-white w-[100%] text-center'>
      Welcome {user?.user?.username}
      <h1 className='cursor-pointer text-red-500' onClick={logoutuser}>Logout</h1>
    </div>
  )
}

export default ChatePage
