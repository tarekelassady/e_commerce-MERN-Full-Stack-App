import "./auth.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../assets/slider/modern-wardrobe.jpg";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../redux/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [getCredentials,setCredentials]=useState({email:"",password:""});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const params=new URLSearchParams(window.location.search);
  const currentPage=params.get('page');
  const state=useLocation().state;
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
  currentUser&&navigate(state.pathname);
  return (
    // <div className='user_form' style={{backgroundImage:`url(${bgImage})`}}>
    <div className='user_form'>
      <form action="">
        <div className='user_form_input'>
          <input type="text" id="email" placeholder="email" autoComplete="email" required value={getCredentials.email} onChange={handleChanges}/>
          <input type="password" id="password" placeholder="Password" autoComplete="password" required value={getCredentials.password} onChange={handleChanges}/>
        </div> 
        <div className="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
        </div>
        <div className='user_form_action_buttons'>
          <button type="submit" onClick={handleLogin} disabled={!getCredentials.email||
          !getCredentials.password}>Login</button>
          <Link onClick={()=>navigate(state.pathname)} state={state&&state.state}><button>Cancel</button></Link>
        </div>
        {/* <p className='error_message'>{isError?"Wrong username or password":""}</p> */}
        <Link to="/register"><p>Have not registered yet?! <span style={{color:"var(--second-color)"}}>Register Now!</span> </p></Link>
      </form>
      
      
    </div>
  )
}

export default Login
