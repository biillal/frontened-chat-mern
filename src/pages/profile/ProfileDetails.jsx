import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function ProfileDetails() {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <div
                className='bg-white h-[85.8vh] w-[90%] md:w-[66%] rounded-md '
            >
                <div className='w-[100%] flex items-center justify-center'>
                    <Avatar
                        size='2xl'
                        className='md'
                        name='Prosper Otemuyiwa'
                        src={user.user.image}
                    />
                </div>
                <div className='container mx-auto pl-[60px] mt-6 flex flex-col gap-6'>
                    <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Name</span>:  {user.user.username} </Text>
                    <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Email</span>:  {user.user.email} </Text>
                </div>
            </div>

        </>
    )
}

export default ProfileDetails
