/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios"; 
import { getkids_data_url, getmens_data_url, getproductby_id, getwomens_data_url, upload_product_url } from "../../../api/api";


export let uploadProduct = createAsyncThunk("Products/uploadProduct", async ({product}, thunkApI) => {
    try {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let response = await Axios.post(upload_product_url, JSON.stringify(product), config);
        return response;

    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue(error.message)
    }
})


export let getMensCollection = createAsyncThunk("Products/getMensCollection",async (data='',thunkApI)=>{
    try {
        let response = await Axios.get(getmens_data_url);
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue(error.message)
    }
})


export let getKidsCollection = createAsyncThunk("Products/getKidsCollection",async (data='',thunkApI)=>{
    try {
        let response = await Axios.get(getkids_data_url);
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue(error.message)
    }
})

export let getWomensCollection = createAsyncThunk("Products/getWomensCollection",async (data='',thunkApI)=>{
    try {
        let response = await Axios.get(getwomens_data_url);
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue(error.message)
    }
})

export let getProductById = createAsyncThunk("Products/getProductById",async (productId="",thunkApI)=>{
    try {
        let response = await Axios.get(getproductby_id(productId));
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkApI.rejectWithValue(error.message)
    }
})