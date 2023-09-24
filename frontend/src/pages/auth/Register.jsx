import "./auth.scss";

const register = () => {
  return (
    
    <div className="user_form">
      <form action="">
        <div className="user_form_input">
          <input type="text" id="name" placeholder="Name" value="{getCredentials.username}" onChange="{handleChange}"/>
          <input type="text" id="username" placeholder="Username" value="{getCredentials.username}" onChange="{handleChange}"/>
          <input type="email" id="email" placeholder="Email" value={`getCredentials.email`} onChange={`handleChange`}/>
          <input type="password" id="password" placeholder="Password" value={`getCredentials.password`} onChange={`handleChange`} />
          <input type="password" id="confirm-password" placeholder="Confirm Password" value={`getCredentials.password`} onChange={`handleChange`} />
          <p>By creating an account, I consent to the processing of my personal data in accordance with the <a href="/">Privacy Policy</a></p>
        </div>

        <div className="user_form_action_buttons">
          <button onClick={`handleClick`} disabled={`!getCredentials.username||
          !getCredentials.email||!getCredentials.password`}>Register</button>
          <button onClick={`()=>navigate("/")`}>Cancel</button>
        </div>

        <p className={`getRegMessage==="User has been registered successfully"?"":"error_message"`}>{`getRegMessage`}</p>
      </form>
      
      
    </div>
  )
}

export default register
