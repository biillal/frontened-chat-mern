import axios from 'axios'
import { profileActions } from '../slice/profileSlice'
import { authActions } from '../slice/userSlice'
import { chatActions } from '../slice/chatSlice'

export function getProfile(userID) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://backend-chat-7n01.onrender.com/api/v1/users/${userID}`)
            dispatch(profileActions.setProfile(data))
        } catch (error) {
            console.log(error)
        }
    }
}


export function accessChatId(userId) {
    return async (dispatch, getState) => {
        try {
            dispatch(chatActions.setLoading())
            const { data } = await axios.post(`https://backend-chat-7n01.onrender.com/api/v1/chats`, userId, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(chatActions.clearLoading())
            dispatch(chatActions.setAccessChat(data))
        } catch (error) {
            console.log(getState().auth.user.token)
            alert(error.response.data.message)
        }
    }
}


// update profile
export function updateProfile(userId, profile) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.put(`https://backend-chat-7n01.onrender.com/api/v1/users/${userId}`, profile, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })

            dispatch(profileActions.updateProfile(data))
            dispatch(authActions.setUsername(data.username))
            alert("successfully")

            // modified username in localstorage user
            const user = JSON.parse(localStorage.getItem("userChat"));
            user.user.username = data?.username
            localStorage.setItem("userChat", JSON.stringify(user))
        } catch (error) {
            console.log(getState().auth.user.token)
            alert(error.response.data.message)
        }
    }
}

export function fetchChats(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(chatActions.setLoading())
            const { data } = await axios.get(`https://backend-chat-7n01.onrender.com/api/v1/chats`, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(chatActions.clearLoading())
            dispatch(chatActions.setfetchAllChats(data))


        } catch (error) {
            console.log(getState().auth.user.token)
            alert(error.response.data.message)
        }
    }
}