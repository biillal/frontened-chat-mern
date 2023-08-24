import axios from 'axios'
import { toast } from "react-toastify";
import { authActions } from '../slice/userSlice';
//login user




//register user
export function registerUser(user){
    return async (dispatch,getState) =>{
        try {
            console.log(user);
             const {data} = await axios.post("https://backend-chat-7n01.onrender.com/api/v1/auth/signup",user)
             console.log(data,'dada');
             alert(data.message)
             dispatch(authActions.register(data.message))
             
        } catch (error) {
            alert(error.response.data.errors[0].msg)
        }
    } 
}


                            