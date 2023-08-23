import axios from 'axios'
import { toast } from "react-toastify";
import { authActions } from '../slice/userSlice';
//login user
export function loginUser(user){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.post("http://localhost:8000/api/auth/login",user)
             dispatch(authActions.login(data))
             localStorage.setItem('userInfo',JSON.stringify(data));
        } catch (error) {
            toast.error(error.response.data.message)
        }
    } 
}

//logout user
export function logoutUser(){
    return async (dispatch,getState) =>{
        dispatch(authActions.logout())
        localStorage.removeItem("userInfo")
    } 
}

//register user
export function registerUser(user){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.post("http://localhost:5000/api/v1/auth/signup",user)
             dispatch(authActions.register(data.message))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    } 
}


//verified account
export function verifyEmail(userId,token){
    return async (dispatch,getState) =>{
        try {
             await axios.get(`http://localhost:8000/api/auth/${userId}/verify/${token}`)
             dispatch(authActions.setIsEmailVerified())
        } catch (error) {
            toast.error(error.response.data.message)
        }
    } 
}