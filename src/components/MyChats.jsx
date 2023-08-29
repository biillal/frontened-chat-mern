import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChat } from '../redux/apiCalls/chatApiCalls'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import ChatLoading from './ChatLoading'
import { getSender } from '../config/ChatLogics'
function MyChats() {
  const [selectedChat,setSelectedChat] = useState('')
  const {accessChat} = useSelector((state)=>state.chat)
  const {fetchChats} = useSelector((state)=>state.chat)
  const {user} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchChat())
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
      <Box
        display="flex"
        flexDir='column'
        p={3}
        bg='#F8F8F8'
        width="100%"
        h="75vh"
        borderRadius="lg"
        overflowY="hidden"
      >
        {
          fetchChats ? (
            <Stack overflowY="scroll">
              {
                fetchChats.map((chat)=>{
                  return(
                    <Box
                      onClick={()=>setSelectedChat(chat)}
                      cursor="pointer"
                      bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                      color={selectedChat === chat ? "white" :"black"}
                      px={3}
                      py={2}
                      borderRadius='lg'
                      key={chat._id}
                    >
                      <Text>
                        {!chat.isGroupChat ? (
                          getSender(user,chat.users)
                        ) : (chat.chatName)}
                      </Text>
                    </Box>
                  )
                })
              }
            </Stack>

         ): (
            <ChatLoading/>
          )
        }
      </Box>
    </Box>
  ) 
}

export default MyChats
