import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        cartQuantity:0,
        cartTotalPrice:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.cartQuantity+=1;
            state.cartTotalPrice+=action.payload.price*action.payload.quantity;
        }
    }
})

export const {addProduct}=cartSlice.actions;
export default cartSlice.reducer;