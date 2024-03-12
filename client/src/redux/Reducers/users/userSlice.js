import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, loginUser, registerUser } from "../../Actions/users/userActions";



const defaultState = localStorage.getItem('token') ?
    {
        loading: false,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        errorMessage: null
    } : {
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false,
        errorMessage: null
    }

const userSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers :{
        logOut: (state) => {
            localStorage.clear();
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.token = action?.payload?.token
                state.isAuthenticated = true;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                localStorage.removeItem('token');
                state.loading = false;
                state.token = null;
                state.isAuthenticated = false;
                state.errorMessage = action.payload;
            })
            .addCase(getUserInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserInfo.fulfilled, (state,action) => {
                localStorage.setItem('user', JSON.stringify(action?.payload?.data));
                state.loading = false;
                state.user= action.payload?.data;
                state.isAuthenticated = true;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                localStorage.removeItem('user');
                state.loading = false;
                state.errorMessage = action.payload;
                state.isAuthenticated = false;
                state.user = null;
            })
            
    }
})

export const { logOut } = userSlice.actions;

export default userSlice.reducer