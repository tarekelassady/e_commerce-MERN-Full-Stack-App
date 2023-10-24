import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { toast } from "react-toastify";

export const login=async(dispatch,user)=>{
    const currentUser=JSON.parse(localStorage.getItem("user"))||null;
        try {
            if (!currentUser) {
                dispatch(loginStart());
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, user,{withCredentials:true});
                localStorage.setItem("user",JSON.stringify(res.data));  
                dispatch(loginSuccess(res.data));
                toast.success("Login Success");
            }
        } catch (err) {
            dispatch(loginFailure());
            toast.error(err.response.data);
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

