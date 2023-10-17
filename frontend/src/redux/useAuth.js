import axios from "axios";
import { useEffect, useState } from "react"
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const useAuth=()=>{
    const [getCurrentUser,setCurrentuser]=useState(JSON.parse(localStorage.getItem("user"))||null);

    const login=async(dispatch,user)=>{
        if(!getCurrentUser){
            try{
                dispatch(loginStart());
                const res=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,user);
                dispatch(loginSuccess(res.data));
                setCurrentuser(res.data);
                console.log(getCurrentUser)
            }catch(err){
                dispatch(loginFailure());
            }
        }
    }
    useEffect(()=>{
        console.log(getCurrentUser)
        localStorage.setItem("user",JSON.stringify(getCurrentUser));  
    },[getCurrentUser])

    return {login};
}
