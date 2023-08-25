import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'

function Home() {
  return (

    <Container>
      <div className='flex justify-center bg-white mt-[15px] p-3 font-bold font-body rounded-lg fon'>TALK-A-TIVE</div>
      <Box
        bg="white" w='100%' m='16px 0 0 0 ' p='2'
        borderRadius="lg" borderWidth='1px'
      >
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>

  )
}

export default Home
