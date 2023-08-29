import { Button, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getProfile, updateProfile, uploadPhoto } from '../../redux/apiCalls/profileApiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Update() {
    const [username,setUsername] = useState('')
    const { id } = useParams()
    const { profileUser } = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    console.log(profileUser);
    useEffect(() => {
        dispatch(getProfile(id))
    }, [])
    const { user } = useSelector((state) => state.auth)
    const [file, setfile] = useState(null)
    const formFileSubmitHandler = (e) => {
        e.preventDefault();
        if (!file) return alert("file is empty");
        const formData = new FormData();
        formData.append("image", file);
        dispatch(uploadPhoto(formData))
    }
    const formhandlerSubmit = (e) =>{
        e.preventDefault()
        dispatch(updateProfile(id ,{username}))
    }
    return (
        <div className='bg-white h-[85.8vh] w-[95%] md:w-[66%] rounded-md '>
            <div className='w-[100%] flex items-center mt-12 justify-center relative'>
                <img src={file ? URL.createObjectURL(file) : profileUser?.image.url} alt='profile user' className='h-[180px] w-[180px] rounded-full ' />
                {
                    (
                        <form className='w-[240px]  absolute top-36 md:left-[465px] left-[235px] ' onSubmit={formFileSubmitHandler} >
                            <abbr title='update image'>
                                <label htmlFor='file' className='border-none pt-0 pl-3 pr-3 font-bold text-black'>
                                    <i class="ri-camera-fill bg-black text-white p-2 rounded-full"></i>
                                </label>
                            </abbr>
                            <input type="file"
                                style={{ display: "none" }}
                                name="file" id='file'
                                onChange={(e) => setfile(e.target.files[0])}
                            />
                            <button type="submit" className='border-none bg-white pt-0 pl-3 pr-3 font-semibold ml-[5px] rounded-sm text-black '>
                                upload
                            </button>
                        </form>
                    )
                }
            </div>
            <form className='container mx-auto md:pl-[60px] pl-[30px] mt-14 flex flex-col gap-6' onSubmit={formhandlerSubmit}>
                <Input value={profileUser.username} onChange={(e)=>setUsername(e.target.value)} />
                <Button type='submit'>Update</Button>
            </form>
        </div>
    )
}

export default Update
