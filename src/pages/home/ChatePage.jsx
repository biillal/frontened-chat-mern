import React from 'react'
import './chatPage.css'
import { useSelector } from 'react-redux'

function ChatePage() {
  const {user} = useSelector((state)=>state.auth)
  return (
    <div className='bg-white w-[100%] text-center'>
      Welcome {user?.user?.username}
    </div>
  )
}

export default ChatePage
