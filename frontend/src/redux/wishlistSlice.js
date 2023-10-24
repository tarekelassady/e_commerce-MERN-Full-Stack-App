import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:{
        products:[],
        wishlistQuantity:0,
    },
    reducers:{
        addWishlist:(state,actions)=>{
            state.products.push(actions.payload);
            state.wishlistQuantity+=1;
        }
    }
});

export const {addWishlist} =wishlistSlice.actions;
export default wishlistSlice.reducer;