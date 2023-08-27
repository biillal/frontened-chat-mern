import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import { BellIcon, CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/apiCalls/authApiCalls'
function SideDrawer() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutuser = () => {
      dispatch(logoutUser())
      navigate('/')
    }
    const { user } = useSelector((state) => state.auth)
    return (
        <>
            <Box className='flex justify-between items-center bg-white pt-[5px] pl-[10px] pr-[10px] pb-[5px] rounded-sm'>
                <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                    <Button variant="ghost">
                        <i class="ri-search-line"></i>
                        <Text d={{ base: "none", md: 'flex' }} className='hidden md:block'>Search user</Text>
                    </Button>
                </Tooltip>
                <Text fontSize='2xl' fontFamily="body">
                    TALK-A-TIVE
                </Text>
                <div>
                    <Menu>
                        <MenuButton as={Button}>
                            <BellIcon />
                        </MenuButton>
                        {/** <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<CheckCircleIcon />} >
                            <Avatar size='sm' cursor='pointer' name={user.user.usename} src={user.user.image} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>My Profile</MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={logoutuser}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>
        </>
    )
}

export default SideDrawer
