import "./auth.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/slider/modern-wardrobe.jpg";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../redux/userSlice";

const Login = () => {
  const [getCredentials,setCredentials]=useState({username:"",password:""});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChanges=(e)=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
  }
  const handleLogin=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:4000/users/login",{
      username:getCredentials.username,
      password:getCredentials.password
    });
    try{
      const {username,email}=res.data;
      dispatch(User({username,email}));
      navigate("/");
      console.log(res);
    }catch(err){
      res.status(500).json(err);
    }
    
  }
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
        <p className='error_message'>{`getLoginMsg`}</p>
        <Link to="/register"><p>Have not registered yet?! <span style={{color:"white"}}>Register Now!</span> </p></Link>
      </form>
      
      
    </div>
  )
}

export default Login
