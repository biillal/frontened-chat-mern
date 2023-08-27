import React, { useState } from 'react'
import SideDrawer from '../../components/SideDrawer'
import { Box } from '@chakra-ui/react'
import LeftDrawer from './LeftDrawer'
import RightDrawer from './RightDrawer'
import ProfileDetails from './ProfileDetails'

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
          aboutFilter === "profileDetails" && <ProfileDetails />
        }
      </div>
    </div>
  )
}

export default Profile
