import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function Passwordups() {
  const [currentPassword , setCurrentPassword] = useState('')
  const [newPassword , setnewPassword] = useState('')
  const [confirmNewPassword , setconfirmNewPassword] = useState('')

  const formhandlerSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='bg-white h-[85.8vh] w-[95%] md:w-[66%] rounded-md '>
      <form className='container mx-auto md:pl-[60px] pl-[30px] mt-14 flex flex-col gap-6' onSubmit={formhandlerSubmit}>
        <Input  placeholder='Current password' onChange={(e)=>setCurrentPassword(e.target.value)}/>
        <Button type='submit'>Update</Button>
      </form>
    </div>
  )
}

export default Passwordups
