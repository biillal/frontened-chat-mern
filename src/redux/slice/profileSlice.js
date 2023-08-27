import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name:"profile",
    initialState:{
       profileUser:null,
       loading:false,
       isProfileDeleted:false,
       profiles:[]
    },
    reducers:{
       setProfile(state,action){
         state.profileUser = action.payload
       },
       setProfilePhoto(state,action){
         state.profileUser.image = action.payload
       },
    }
})

const profileActions = profileSlice.actions;
const profileReducer = profileSlice.reducer;
export { profileReducer, profileActions }