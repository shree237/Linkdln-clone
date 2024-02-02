import React, { useState } from "react";
import { LoginAPI } from "../api/authAPI";
import "../Sass/Login.scss";

export default function LoginComponent() {
  const [inputData, setInputData] = useState({});

  const login = async ()=> {
    try {
      let res = await LoginAPI(inputData.email, inputData.password)
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Login Component</h1>

      <div className="auth-inputs">

        <input type="email" className="common-input" placeholder="Enter your Email" 
        onChange={(e)=>{ setInputData({...inputData, email:event.target.value})}} />

        <input type="password" className="common-input" placeholder="Enter your Password"
        onChange={(e)=>{ setInputData({...inputData, password:event.target.value})}} />

      </div>
      <button onClick={login} className='login-btn'>Log in to Linkdln</button>
    </div>
  );
}
