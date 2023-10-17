import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        isError:false,
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.isFetching=false;
            state.isError=false;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.isError=true;
        }

    }
})

export const {loginStart,loginSuccess,loginFailure} =userSlice.actions;
export default userSlice.reducer;