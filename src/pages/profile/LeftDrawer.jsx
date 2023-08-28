import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/apiCalls/profileApiCalls'
import { useParams } from 'react-router-dom'

function LeftDrawer({ aboutFilter, setAboutFilter }) {
  const { profileUser } = useSelector((state)=>state.profile)
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id);

  console.log(profileUser);
  useEffect(() => {
    dispatch(getProfile(id))
  }, [getProfile])
  return (
    <>
      <div
        className='bg-white h-[85.8vh] w-[95%] md:w-[30%] rounded-md '
      >
        <div className='w-[100%] pl-[10px] pr-[10px] h-[90%]'>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "profileDetails" ? 'bg-blue-300' : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("profileDetails")}>Profile</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "updateProfile" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("updateProfile")}>Update Profile</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "updatePassword" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("updatePassword")}>Update password</Button>
          <Button className={`w-[100%] mt-11 ${aboutFilter === "address" ? "bg-blue-300" : ""}`} bg='blue.500' as='button' onClick={() => setAboutFilter("address")}>added Address</Button>
          <Button className={`w-[100%] mt-11 `} bg='red.500' color='white' as='button'>Logout</Button>
        </div>
      </div>
    </>
  )
}

export default LeftDrawer
