import axios from 'axios'
import { profileActions } from '../slice/profileSlice'
import { authActions } from '../slice/userSlice'

export function getProfile(userID) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://backend-chat-6wma.onrender.com/api/v1/users/${userID}`)
            dispatch(profileActions.setProfile(data))
        } catch (error) {
            console.log(error)
        }
    }
}


export function uploadPhoto(newPhot) {
    return async (dispatch, getState) => {
        try {
            const { data } = await axios.post(`https://backend-chat-6wma.onrender.com/api/v1/users/profile/profile-photo-upload`, newPhot, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                    "Content-type": "multipart/form-data"
                }
            })

            dispatch(profileActions.setProfilePhoto(data.image))
            dispatch(authActions.setPhoto(data.image))
            alert(data.message)

            // modified photo in localstorage user
            const user = JSON.parse(localStorage.getItem("userChat"));
            user.user.image = data.image
            localStorage.setItem("userChat", JSON.stringify(user))
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
            const { data } = await axios.put(`https://backend-chat-6wma.onrender.com/api/v1/users/${userId}`, profile, {
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

export function searchUser(user) {
    return async (dispatch, getState) => {
        try {
            dispatch(profileActions.setLoading())
            const { data } = await axios.get(`https://backend-chat-6wma.onrender.com/api/v1/users/search?search=${user}`, {
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token,
                }
            })
            dispatch(profileActions.clearLoading())
            dispatch(profileActions.setSearchUser(data))


        } catch (error) {
            console.log(getState().auth.user.token)
            alert(error.response.data.message)
        }
    }
}