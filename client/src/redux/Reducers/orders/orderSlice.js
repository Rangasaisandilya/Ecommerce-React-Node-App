import { createSlice } from "@reduxjs/toolkit";



const defaultState = {
    loading : false,
    cartItems : [],
    errorMessage : '',
    order : {},
    orders : []
}

const orderSlice = createSlice({
    name: "Orders",
    initialState: defaultState,
    reducers: {
        addToCart: (state, action) => {
            const productexists = state.cartItems.find(item => item._id === action.payload._id)
            state.loading = true;
            if (productexists) {
                state.cartItems = state.cartItems.map(item => {
                    if (item._id === action.payload._id) {
                        item.qty = action.payload.qty
                    }
                    return item;
                })
            } else {
                state.cartItems.push(action.payload)
            }
            state.loading = false;
        },
        deleteItemfromCart: (state, action) => {
            state.loading = true;
            state.cartItems = state.cartItems.filter(item => item._id!== action.payload)
            state.loading=false;
        },
        changeProuctQuantity: (state, action) => {
            state.loading = true;
            state.cartItems = state.cartItems.map(item => {
                if (item._id === action.payload.productId) {
                    if (action.payload.type === "increment") {
                        item.qty++
                    }
                    else if (action.payload.type === "decrement") {
                        item.qty = item.qty - 1 > 0 ? item.qty - 1 : 1
                    }
                }
                return item;
            })
            state.loading = false;
        }
    }

})

export const { addToCart,deleteItemfromCart,changeProuctQuantity } = orderSlice.actions

export default orderSlice.reducer