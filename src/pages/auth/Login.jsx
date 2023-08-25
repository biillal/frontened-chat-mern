import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/apiCalls/authApiCalls'
import { RotatingLines } from 'react-loader-spinner'

function Login() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isverified, loading } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const handleClick = () => { setShow(!show) }
  const handlerSubmit = () => {
    dispatch(loginUser({ email, password }))
  }
  if (isverified === true) {
    console.log(isverified);
    return navigate('/chatPage')
  }
  return (
    <VStack spacing={4} >

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
        onClick={handlerSubmit}
        colorScheme='blue'
        width="100%"
        mt='10px'

      >
        {
          loading ? <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
          /> : "Login"
        }
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
