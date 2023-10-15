import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        username:"",
        email:"tarekelassady@gmail.com"
    },
    reducers:{
        User:(state,action)=>{
            state.username=action.payload.username;
            state.email=action.payload.email;
        }
    }
})

export const {User} =userSlice.actions;
export default userSlice.reducer;