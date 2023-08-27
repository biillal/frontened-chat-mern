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
      <Box
        display='flex'
        justifyContent="space-between"
        alignItems="center"
        padding='10px 25px 10px 25px'
      >
        <LeftDrawer aboutFilter={aboutFilter} setAboutFilter={setAboutFilter} />
        {
          aboutFilter === "profileDetails" && <ProfileDetails />
        }
      </Box>
    </div>
  )
}

export default Profile
