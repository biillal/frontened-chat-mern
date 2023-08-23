import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => { setShow(!show) }
  const handlerSubmit = () => { }
  return (
    <VStack spacing={4} onSubmit={handlerSubmit}>

      <FormControl isRequired color="black">
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          placeholder='Jois@gmail.com'
          onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl isRequired color="black">
        <FormLabel>passwored</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement width='4.5rem'>
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme='blue'
        width="100%"
        mt='10px'

      >
        Login
      </Button>
      <Button
        colorScheme='white'
        color="black"
        border='1px'
        width="100%"
        mt='10px'

      >
        SignUp with Google
      </Button>
    </VStack>
  )
}

export default Login
