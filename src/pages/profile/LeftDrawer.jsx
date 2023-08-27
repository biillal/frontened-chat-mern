import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function LeftDrawer({aboutFilter,setAboutFilter}) {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <Box
        bg='white'
        height='85.8vh'
        width='30%'
        borderRadius="10px"
      > 
        <Text className='text-center mt-10 text-xl font-body  font-bold'>welcome {user.user.username} </Text>
        <div className='w-[100%] pl-[10px] pr-[10px] h-[90%]'>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "profileDetails" ? 'bg-blue-300' : ""}`} bg='blue.500'  as='button' onClick={() => setAboutFilter("profileDetails")}>Profile</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "updateProfile" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("updateProfile")}>Update Profile</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "updatePassword" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("updatePassword")}>Update password</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "address" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("address")}>added Address</Button>
          <Button className={`w-[100%] mt-11 `} bg='red.500' color='white' as='button'>Logout</Button>
        </div>
      </Box>
    </>
  )
}

export default LeftDrawer
