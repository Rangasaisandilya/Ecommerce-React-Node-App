/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { getUserInfo_url, loginuser_url, regsiteruser_url } from "../../../api/api";
import { setAuthToken } from './../../../utils/setAuthToken';



export const registerUser = createAsyncThunk('users/registerUser', async ({ user, swal, navigate }, { rejectWithValue }) => {
    try {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await Axios.post(regsiteruser_url, JSON.stringify(user), config);
        swal({
            title: "Registered Successfully Please Login to Continue",
            icon: "success",
            button: "Ok",
        });
        navigate('/users/login')
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message);
        swal({
            title: error.response?.data?.message || 'Soemthing went Wrong !!',
            icon: "error",
            button: "Ok",
        });
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
}
);

export const loginUser = createAsyncThunk('users/loginUser', async ({ user, swal, navigate }, { dispatch,rejectWithValue }) => {
    try {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await Axios.post(loginuser_url, JSON.stringify(user), config);
        swal({
            title: "Login Success",
            icon: "success",
            button: "Ok",
        });
        navigate('/')
        if(response?.data?.token){
            localStorage.setItem('token',response?.data?.token);
            dispatch(getUserInfo())
        }
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message);
        swal({
            title: error.response?.data?.message || 'Soemthing went Wrong!!',
            icon: "error",
            button: "Ok",
        });
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
});


export const getUserInfo = createAsyncThunk('users/getUserInfo', async (data, { rejectWithValue }) => {
    try {
        if (localStorage?.token) {
            setAuthToken(localStorage.getItem('token'));
        }
        let response = await Axios.get(getUserInfo_url);
        return response.data;
    } catch (error) {
        console.error(error.response?.data?.message);
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
})

