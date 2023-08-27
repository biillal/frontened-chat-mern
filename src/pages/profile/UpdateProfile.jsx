import { Avatar, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, uploadPhoto } from '../../redux/apiCalls/profileApiCalls'
import { useParams } from 'react-router-dom'

function UpdateProfile() {
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
    return (
        <div className='bg-white h-[85.8vh] w-[95%] md:w-[66%] rounded-md '>
            <div className='w-[100%] flex items-center mt-12 justify-center relative'>
                <img src={file ? URL.createObjectURL(file) : profileUser?.image.url} alt='profile user' className='h-[180px] w-[180px] rounded-full ' />
                {
                    (
                        <form className='w-[240px]  absolute top-36 left-[465px] ' onSubmit={formFileSubmitHandler} >
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
            <div className='container mx-auto md:pl-[60px] pl-[30px] mt-14 flex flex-col gap-6'>
                <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Name</span>:  {user.user.username} </Text>
                <Text className='font-body font-bold text-gray-400 text-xl'><span className='text-black'>Email</span>:  {user.user.email} </Text>
            </div>
        </div>
    )
}

export default UpdateProfile
