import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name:"profile",
    initialState:{
       accessChat:"",
       fetchChats:[],
       loading:false,
       isProfileDeleted:false,
       profiles:[],
    },
    reducers:{
       setAccessChat(state,action){
         state.accessChat = action.payload
       },
      setLoading(state,action){
        state.loading = true
      },
      clearLoading(state,action){
        state.loading = false
      },
      setfetchAllChats(state,action){
        state.fetchChats = action.payload
      }
    }
})

const chatActions = chatSlice.actions;
const chatReducer = chatSlice.reducer;
export { chatReducer, chatActions }