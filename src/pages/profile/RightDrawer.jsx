import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function RightDrawer() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
    <Box
     bg='white'
      height='85.8vh'
      width='66%'
      borderRadius="10px"
    >


    </Box>
  </>
  )
}

export default RightDrawer
