import { Avatar, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function UserListItem({user,handleFunction}) {
  return (
    <Box 
      onClick={handleFunction}
      cursor='pointer'
      bg='#E8E8E8'
      _hover={{
        backgroundColor:"38B2AC",
        color:"white"
      }}
      width="100%"
      display='flex'
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius='lg'
    >
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={user.username}
          src={user.image.url}
        />
        <Box>
            <Text>{user.username} </Text>
            <Text fontSize="xs">
                <b>Email : </b>
                {user.email}
            </Text>
        </Box>
      
    </Box>
  )
}

export default UserListItem
