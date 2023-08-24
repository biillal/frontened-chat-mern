import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("userChat") ? JSON.parse(localStorage.getItem("userChat")) : null,
        registerMessage: null,
        isverified: false,
        loading: false,
        isEmailVerified: false
    },
    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        register(state, action) {
            state.isverified = true 
            state.user = action.payload
             
        } 
        

    }
})

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions }