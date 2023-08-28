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
            state.isverified = true
            state.user = action.payload
            state.loading = false
        },
        setLoding(state, action) {
            state.loading = true
        },
        clearLoading(state, action) {
            state.loading = false
        },
        register(state, action) {
            state.isverified = true
            state.user = action.payload
            state.loading = false
        },
        logout(state, action) {
            state.user = null
        },

        setPhoto(state, action) {
            state.user.user.image = action.payload
        },
        setUsername(state,action){
            state.user.user.username = action.payload
        },


    }
})

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions }