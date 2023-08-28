import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name:"profile",
    initialState:{
       profileUser:null,
       resultSearch:[],
       loading:false,
       isProfileDeleted:false,
       profiles:[],
       loaginSearchUser:false
    },
    reducers:{
       setProfile(state,action){
         state.profileUser = action.payload
       },
       setProfilePhoto(state,action){
         state.profileUser.image = action.payload
       },
       updateProfile(state,action){
        state.profileUser = action.payload
      },
      setSearchUser(state,action){
        state.resultSearch = action.payload
      },
      setLoading(state,action){
        state.loaginSearchUser = true
      },
      clearLoading(state,action){
        state.loaginSearchUser = false
      },
    }
})

const profileActions = profileSlice.actions;
const profileReducer = profileSlice.reducer;
export { profileReducer, profileActions }