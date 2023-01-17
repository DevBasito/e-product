import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './cartItems';

export default configureStore({
    reducer: {
        cart: cartItemReducer

    }
})