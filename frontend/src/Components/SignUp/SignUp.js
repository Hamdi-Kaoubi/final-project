import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../../redux/action/AuthAction'
import './SignUp.css'

const SignUp = () => {
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleRegister=()=>{
    dispatch(register({firstname,lastname,email,password},navigate))
  }
  return (
    <div className="parent">
    <div className="login-modal">
      <div className="title">Tips and Tricks</div>
      <div className="contain">
        <div className="sign-parent">
        <div className="sign-in"><span className="active">Sign up</span></div>
        </div>
        <div className="forms">
            <p className="user-tag tag">First name</p>
            <input type="text" className="username" onChange={(e)=>setFirstname(e.target.value)}/>
            <p className="user-tag tag">Last name</p>
            <input type="text" className="username" onChange={(e)=>setLastname(e.target.value)}/>
            <p className="user-tag tag">Email</p>
            <input type="email" className="username" onChange={(e)=>setEmail(e.target.value)}/>
            <p className="pass-tag tag">Password</p>
            <input type="password" className="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="login-btn" onClick={handleRegister}>
            Sign up
        </button>
    </div>
    </div>
</div>
)
}

export default SignUp
