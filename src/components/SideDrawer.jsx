import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react'
import { BellIcon, CheckCircleIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/apiCalls/authApiCalls'
import { searchUser } from '../redux/apiCalls/profileApiCalls'
import ChatLoading from './ChatLoading'
import UserListItem from './UserListItem'
function SideDrawer() {
    const {resultSearch,loaginSearchUser} = useSelector((state)=>state.profile)
    const [search, setSearch] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutuser = () => {
        dispatch(logoutUser())
        navigate('/')
    }
    console.log(loaginSearchUser);
    console.log(resultSearch);
    const toast = useToast()
    const handlerSearch = (e) => {
        if (!search) {
            toast({
                title: "Please Enter something in search",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-left"
            });
            return;
        }
        dispatch(searchUser(search))
    }
    const accessChat = (userId)=>{
        console.log("heeelooo");
    }
    const { user } = useSelector((state) => state.auth)
    return (
        <>
            <Box className='flex justify-between items-center bg-white pt-[5px] pl-[10px] pr-[10px] pb-[5px] rounded-sm'>
                <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                    <Button variant="ghost" onClick={onOpen}>
                        <i class="ri-search-line"></i>
                        <Text d={{ base: "none", md: 'flex' }} className='hidden md:block'>Search user</Text>
                    </Button>
                </Tooltip>
                <Text fontSize='2xl' className='font-body font-bold'>
                    <Link to='/chatPage'>
                        TALK-A-TIVE
                    </Link>
                </Text>
                <div className='flex gap-2'>
                    <Menu>
                        <MenuButton  >
                            <BellIcon />
                        </MenuButton>
                        {/** <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<CheckCircleIcon />} name={user.user.username}>
                            <Avatar size='sm' cursor='pointer' name={user.user.usename} src={user.user.image.url} />
                        </MenuButton>
                        <MenuList>
                            <Link to={`/profile/${user.user._id}`}><MenuItem>My Profile</MenuItem></Link>
                            <MenuDivider />
                            <MenuItem onClick={logoutuser}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
                    <DrawerBody>
                        <Box display='flex' pb={2}>
                            <Input placeholder='Search by username or email' mr={2} value={search} onChange={(e) => setSearch(e.target.value)} />
                            <Button onClick={handlerSearch}>Go</Button>
                        </Box>
                        {
                            loaginSearchUser ? <ChatLoading/> :(
                                <>
                                  {resultSearch.map((user)=>{
                                    return (
                                        <UserListItem 
                                           key={user._id}
                                           user={user}
                                           handleFunction={()=>accessChat(user._id)}
                                        />
                                    )
                                  })}
                                </>
                            )
                        }
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer
