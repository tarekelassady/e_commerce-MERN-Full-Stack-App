import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login=async(dispatch,user)=>{
    const currentUser=JSON.parse(localStorage.getItem("user"))||null;
        try {
            if (!currentUser) {
                dispatch(loginStart());
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, user);
                localStorage.setItem("user",JSON.stringify(res.data));  
                dispatch(loginSuccess(res.data));
            }
        } catch (err) {
            dispatch(loginFailure());

        }
    };

export const logout=async(dispatch)=>{
    try{
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/logout`);
        localStorage.setItem("user",JSON.stringify(null));  
        dispatch(loginSuccess(null));
    }catch(err){
        console.log(err);
    }
    
}

