import React from 'react'
import './chatPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../redux/apiCalls/authApiCalls'

function ChatePage() {
  const dispatch =useDispatch()
  const {user} = useSelector((state)=>state.auth)
  return (
    <div className='bg-white w-[100%] text-center'>
      Welcome {user?.user?.username}
      <h2 className='' onClick={()=>dispatch(logoutUser())}>Logout</h2>
    </div>
  )
}

export default ChatePage
