import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartRedux"

export default configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
    }
});