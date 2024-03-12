import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Reducers/Products/ProductSlice';
import userSlice from './Reducers/users/userSlice';
import orderSlice from './Reducers/orders/orderSlice';

const rootReducer = combineReducers({
    products: ProductSlice,
    users: userSlice,
    orders: orderSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;

