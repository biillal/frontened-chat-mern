import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/apiCalls/authApiCalls'

function SignUp() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [image, setImage] = useState(null)
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => { setShow(!show) }
    const handlerSubmit = () => {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('passwordConfirm', passwordConfirm)
        formData.append('image', image)
        console.log({ username, email, password, passwordConfirm });
        dispatch(registerUser({ username, email, password, passwordConfirm }))
    }
    return (
        <VStack spacing={3} >
            <FormControl isRequired color="black">
                <FormLabel>User name</FormLabel>
                <Input
                    name='username'
                    type='text'
                    placeholder='Jois dib'
                    onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl isRequired color="black">
                <FormLabel>Email</FormLabel>
                <Input
                    name='email'
                    type='email'
                    placeholder='Jois@gmail.com'
                    onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired color="black">
                <FormLabel>passwored</FormLabel>
                <InputGroup>
                    <Input
                        name='password'
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
            <FormControl isRequired color="black">
                <FormLabel>Password confirmation</FormLabel>
                <InputGroup>
                    <Input
                        name='passwordConfirm'
                        type={show ? "text" : "password"}
                        placeholder='********'
                        onChange={(e) => setEmail(e.target.value)} />
                    <InputRightElement width='4.5rem'>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl isRequired >
                <FormLabel>Upload your picture</FormLabel>
                <Input
                    name='image'
                    type='file'
                    p={1.5}
                    accept='image/*'
                    onChange={(e) => setImage(e.target.files[0])} />
            </FormControl>
            <Button
                onClick={handlerSubmit}
                colorScheme='blue'
                width="100%"
                mt='10px'

            >
                Sign Up
            </Button>
        </VStack>
    )
}

export default SignUp
