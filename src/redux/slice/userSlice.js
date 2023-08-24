import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:localStorage.getItem("userChat") ? JSON.parse(localStorage.getItem("userChat")) : null,
        registerMessage:null,
        isEmailVerified:false
    },
    reducers:{
        login(state,action){
            state.user = action.payload
        },
        register(state,action){
            state.user = action.payload
        },createSlice
       
    }
})

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export {authReducer,authActions}