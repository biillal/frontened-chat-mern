import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChats } from '../redux/apiCalls/chatApiCalls'
import { Box, Button } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
function MyChats() {
  const {accessChat} = useSelector((state)=>state.chat)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchChats())
  },[])
  return (
    <Box
      display={{base:accessChat ? "none" : "flex" , md:"flex"}}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      width={{base:"100%" ,md:"31%"}}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box 
        pb={3}
        px={3}
        fontSize={{bas:'28px' , md:"30px"}}
        fontFamily="body"
        display="flex"
        width='100%'
        justifyContent='space-between'
        alignItems="center"
      >
        My Chats
        <Button
          display='flex'
          fontSize={{base:"17px" , md:"10px" , lg:"17px"}}
          rightIcon={<AddIcon />}
        >
          New Group Chat
        </Button>
      </Box>
    </Box>
  ) 
}

export default MyChats
