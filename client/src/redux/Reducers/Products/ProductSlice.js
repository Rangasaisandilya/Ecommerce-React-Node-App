import { createSlice } from "@reduxjs/toolkit";
import { getKidsCollection, getMensCollection, getProductById, getWomensCollection, uploadProduct } from "../../Actions/Products/productActions";



const defaultState = {
    loading: false,
    products: [],
    selectedProduct: {},
    errorMessage: ''
}

const ProductSlice = createSlice({
    name: "Products",
    initialState: defaultState,
    extraReducers: (builder) => {
        builder
            .addCase(uploadProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(uploadProduct.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(uploadProduct.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            .addCase(getMensCollection.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getMensCollection.fulfilled, (state,action)=>{
                state.loading = false;
                state.products = action?.payload?.data;
            })
            .addCase(getMensCollection.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            .addCase(getKidsCollection.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getKidsCollection.fulfilled, (state,action)=>{
                state.loading = false;
                state.products = action?.payload?.data;
            })
            .addCase(getKidsCollection.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            .addCase(getWomensCollection.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getWomensCollection.fulfilled, (state,action)=>{
                state.loading = false;
                state.products = action?.payload?.data;
            })
            .addCase(getWomensCollection.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            .addCase(getProductById.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getProductById.fulfilled, (state,action)=>{
                state.loading = false;
                state.selectedProduct = action?.payload?.data;
            })
            .addCase(getProductById.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload;
            })
            ;
    }
})


export default ProductSlice.reducer;