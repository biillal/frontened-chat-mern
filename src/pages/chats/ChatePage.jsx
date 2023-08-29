import React from 'react'
import {  useSelector } from 'react-redux'
import SideDrawer from '../../components/SideDrawer'
import MyChats from '../../components/MyChats'
import ChatBox from '../../components/ChatBox'

function ChatePage() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='w-[100%] '>
      {user && <SideDrawer />}
      <div className='flex justify-between p-[10px] w-[100%] '>
          {user && <MyChats />}
          {user && <ChatBox />}
      </div>
    </div>
  )
}

export default ChatePage
