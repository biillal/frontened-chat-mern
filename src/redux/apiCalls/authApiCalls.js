import axios from 'axios'
import { toast } from "react-toastify";
import { authActions } from '../slice/userSlice';
//login user




//register user
export function registerUser(user){
    return async (dispatch,getState) =>{
        try {
             const {data} = await axios.post("https://backend-chat-7n01.onrender.com/api/v1/auth/signup",user)
             console.log(data,'dada');
             dispatch(authActions.register(data.message))
        } catch (error) {
            console.log(error.response)
        }
    } 
}


                            