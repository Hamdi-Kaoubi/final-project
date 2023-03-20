import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../../redux/action/AuthAction'
import './Login.css'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleLogin=()=>{
        dispatch(login({email,password},navigate))
    }
  return (
    <div className='login-body'>
    <div className="parent">
    <div className="login-modal">
      <div className="title">Tips and Tricks</div>
      <div className="containers">
        <div className="sign-parent">
          <div className="sign-in"><span className="active">Login</span></div>
          <div className="sign-up"><a href='/login/signup'><span className="not-active">Sign Up</span></a></div>
        </div>
        {/*sign-parent*/}
        <div className="forms">
          <p className="user-tag tag">Email</p>
          <input type="email" className="username" onChange={(e)=>setEmail(e.target.value)}/>
          <p className="pass-tag tag">Password</p>
          <input type="password" className="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <div className="forgot-section">
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
export default Login