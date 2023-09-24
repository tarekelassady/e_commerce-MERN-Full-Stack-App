import "./auth.scss";
import { Link } from "react-router-dom";
import bgImage from "../../assets/slider/modern-wardrobe.jpg"

const Login = () => {
  return (
    <div className='user_form' style={{backgroundImage:`url(${bgImage})`}}>
      <form action="">
        <div className='user_form_input'>
          <input type="text" id="username" placeholder="Username" value="{getCredentials.username}" onChange="{handleChange}"/>
          <input type="password" id="password" placeholder="Password" value="{getCredentials.password}" onChange="{handleChange}"/>
        </div> 
        <div className='user_form_action_buttons'>
          <button onClick="{handleClick}" disabled="{!getCredentials.username||
          !getCredentials.password}">Login</button>
          <button onClick="{()=>navigate(currentPage)}">Cancel</button>
        </div>
        <p className='error_message'>{`getLoginMsg`}</p>
        <Link to="/register"><p>Have not registered yet?! <span style={{color:"white"}}>Register Now!</span> </p></Link>
      </form>
      
      
    </div>
  )
}

export default Login
