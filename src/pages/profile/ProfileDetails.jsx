import { Avatar, Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../redux/apiCalls/profileApiCalls'

function ProfileDetails() {
    const {id} = useParams()
    const {profileUser} = useSelector((state)=>state.profile)
    const dispatch = useDispatch()
    console.log(profileUser);
    useEffect(()=>{  
      dispatch(getProfile(id))
    },[])

    return (
        <>
            <div
                className='bg-white h-[85.8vh] w-[95%] md:w-[66%] rounded-md '
            >
                <div className='w-[100%] flex items-center mt-12 justify-center'>
                    <Avatar
                        size='2xl'
                        className='md'
                        name='Prosper Otemuyiwa'
                        src={profileUser?.image?.url}
                     />
                </div>
                <div className='container mx-auto md:pl-[60px] pl-[30px] mt-14 flex flex-col gap-6'>
                    <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Name</span>: {profileUser?.username} </Text>
                    <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Email</span>: {profileUser?.email} </Text>
                </div>
            </div>

        </>
    )
}

export default ProfileDetails
