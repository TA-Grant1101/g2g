import React, { useState } from "react";

const Login = () => {
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [error, setError]= useState("");

  return (
    <div className='login'>
       
        <div>
            <input value ={username} 
            onChange={e =>setUsername(e.target.value)} 
            type = "text" 
            placeholder='Username'
            />
            <input  
            value ={password} onChange={e =>setPassword(e.target.value)} 
            type = "password" 
            placeholder='Password'
            />
            <small> this is error placeholder</small>
            <br></br>
            <button className='secondbtn'> Login </button>
        </div>
        </div>
  )
}

export default Login