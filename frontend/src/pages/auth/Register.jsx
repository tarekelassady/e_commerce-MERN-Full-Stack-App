import { useState } from "react";
import "./auth.scss";
import { Visibility, VisibilityOff, Check } from '@mui/icons-material/';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [getVisiblePWD, setVisiblePWD] = useState(false);
  const [getCredentials, setCredentials] = useState({name:"",username:"",email:"",password:""});
  const [getConfirmedPassword, setConfirmedPassword] = useState(false);
  const [getRegMessage,setRegMessage]=useState();
  const navigate=useNavigate();
  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }
  const confirmPassword = (e) => {
    if (e.target.value === getCredentials.password) {
      setConfirmedPassword(true);
    }else{
      setConfirmedPassword(false);
    }
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setRegMessage("");
      const res = await axios.post(`${backendURL}/users/register`, getCredentials);
      toast.info(res.data.message);
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  return (

    <div className="user_form">
      <form action="">
        <div className="user_form_input">
          <input type="text" id="name" placeholder="Name" value={getCredentials.name} onChange={handleChange} />
          <input type="text" id="username" placeholder="Username" value={getCredentials.username} onChange={handleChange} />
          <input type="email" id="email" placeholder="Email" value={getCredentials.email} onChange={handleChange} />
          <div className="password">
            <input type={getVisiblePWD ? "text" : "password"} id="password" placeholder="Password" value={getCredentials.password} onChange={handleChange} />
            {getVisiblePWD ?
              <VisibilityOff className="hide-pwd" onClick={() => setVisiblePWD(false)} />
              :
              <Visibility className="show-pwd" onClick={() => setVisiblePWD(true)} />
            }
          </div>
          <div className="confirm-password">
            <input type={getVisiblePWD ? "text" : "password"} id="confirm-password" placeholder="Confirm Password" required onChange={confirmPassword} />
            <Check className="confirm-pwd" style={{visibility:getConfirmedPassword?"visible":"hidden"}}/>
            {getVisiblePWD ?
              <VisibilityOff className="hide-pwd" onClick={() => setVisiblePWD(false)} />
              :
              <Visibility className="show-pwd" onClick={() => setVisiblePWD(true)} />
            }
          </div>
          <p>By creating an account, I consent to the processing of my personal data in accordance with the <a href="/" style={{color:"var(--second-color)"}}>Privacy Policy</a></p>
        </div>

        <div className="user_form_action_buttons">
          <button onClick={handleRegister} disabled={!getCredentials.username ||
            !getCredentials.email || !getCredentials.password || !getConfirmedPassword}>Register</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>

        <p className={getRegMessage==="User has been registered successfully"?"":"error_message"}>{getRegMessage}</p>
      </form>


    </div>
  )
}

export default Register
