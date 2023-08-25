import axios from 'axios'
import { toast } from "react-toastify";
import { authActions } from '../slice/userSlice';
//login user




//register user
export function registerUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(authActions.setLoding())
            const { data } = await axios.post("https://backend-chat-7n01.onrender.com/api/v1/auth/signup", user)
            alert(data.message)
            dispatch(authActions.clearLoading())
            dispatch(authActions.register(data))
            localStorage.setItem('userChat', JSON.stringify(data));


        } catch (error) {
            alert(error.response.data.errors[0].msg)
            dispatch(authActions.clearLoading())
        }
    }
}



export function loginUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(authActions.setLoding())
            const { data } = await axios.post("https://backend-chat-7n01.onrender.com/api/v1/auth/login", user)
            alert(data.message)
            dispatch(authActions.clearLoading())
            dispatch(authActions.login(data))
            localStorage.setItem('userChat', JSON.stringify(data));
        } catch (error) {
            alert(error.response.data.message)
            dispatch(authActions.clearLoading())
        }
    }
}

//logout user
export function logoutUser(){
    return async (dispatch,getState) =>{
        dispatch(authActions.logout())
        localStorage.removeItem("userChat")
    } 
}