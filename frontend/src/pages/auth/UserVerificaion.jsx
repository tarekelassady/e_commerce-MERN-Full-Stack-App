import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const UserVerificaion = () => {
    const backendURL = process.env.REACT_APP_BACKEND_URL;
    const {activationToken}=useParams();
    const [getIsError,setIsError]=useState(false);

    const ActivateUser=async()=>{
      try{
          if(!activationToken){
              setIsError(true)
              console.log("No Activation Token");
          }
          const res=await axios.post(`${backendURL}/users/activation`,{activationToken});
          
          setIsError(false);
          console.log("User has been created successfully");
      }catch(err){
          console.log(err.message);
          setIsError(true);
      }
  }
    useEffect(()=>{ 
        
        ActivateUser();
    },[])
  return (
    <div>
      verification
    </div>
  )
}

export default UserVerificaion
