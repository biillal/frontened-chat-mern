import React, { useEffect, useState } from 'react'
import SideDrawer from '../../components/SideDrawer'
import { Box } from '@chakra-ui/react'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import ProfileDetails from './ProfileDetails'
import UpdateProfile from './updateProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../redux/apiCalls/profileApiCalls'
import { useParams } from 'react-router-dom'

function Profile() {
  const [aboutFilter, setAboutFilter] = useState("profileDetails")

  return (
    <div className='w-[100%]'>
      <SideDrawer />
      <div
      className='flex flex-col w-[100%] flex-wrap gap-y-4 md:flex-row justify-between items-center pt-[10px] pb-[10px] pl-[25px] pr-[25px] '
 
      >
        <LeftDrawer aboutFilter={aboutFilter} setAboutFilter={setAboutFilter} />
        {
          aboutFilter === "profileDetails" && <ProfileDetails  />
        }
        {
          aboutFilter === "updateProfile" && <UpdateProfile  />
        }
      </div>
    </div>
  )
}

export default Profile
