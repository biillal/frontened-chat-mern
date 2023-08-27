import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from './slice/userSlice'
import { profileReducer } from './slice/profileSlice'

const store = configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer
    } 
})

export default store