import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/slider/modern-wardrobe.jpg";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../redux/auth";
import { useAuth } from "../../redux/useAuth";

const Login = () => {
  const [getCredentials,setCredentials]=useState({username:"",password:""});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChanges=(e)=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
  }
  const {currentUser,isError}=useSelector(state=>state.user);
  // const {login}=useAuth();
  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
      login(dispatch,getCredentials);
    }catch(err){
      console.log(err);
    }
    
  }
  currentUser&&navigate("/");
  return (
    // <div className='user_form' style={{backgroundImage:`url(${bgImage})`}}>
    <div className='user_form'>
      <form action="">
        <div className='user_form_input'>
          <input type="text" id="username" placeholder="Username" value={getCredentials.username} onChange={handleChanges}/>
          <input type="password" id="password" placeholder="Password" value={getCredentials.password} onChange={handleChanges}/>
        </div> 
        <div className='user_form_action_buttons'>
          <button onClick={handleLogin} disabled={!getCredentials.username||
          !getCredentials.password}>Login</button>
          <button onClick="{()=>navigate(currentPage)}">Cancel</button>
        </div>
        <p className='error_message'>{isError?"Wrong username or password":""}</p>
        <Link to="/register"><p>Have not registered yet?! <span style={{color:"white"}}>Register Now!</span> </p></Link>
      </form>
      
      
    </div>
  )
}

export default Login
