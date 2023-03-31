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
  const [role,setRole]=useState('')
  const [secret,setSecret]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleRegister=()=>{
    if (role=='admin' && secret!='hkb1994dz') {
      alert('invalid admin')
    }else{
      dispatch(register({firstname,lastname,email,password,role},navigate))
    }
  }
  return (
    <div className="signUp-parent">
    <div className="signUp-modal">
      <div className="signUp-title">Tips and Tricks</div>
      <div className="signUp-cntnr">
        <div className="sign-parent">
        <div className="sign-in"><span className="active">Sign up</span></div>
        </div>
        <div className='role-containes'>
          <input type='radio' name='role' value='user' onChange={(e)=>setRole(e.target.value)}/>User
          <input type='radio' name='role' value='admin' onChange={(e)=>setRole(e.target.value)}/>Admin
        </div>
        <div className="forms">
            {role=='admin'?<div><p className="user-tag tag">Secret Key</p>
            <input type="text" className="username" onChange={(e)=>setSecret(e.target.value)}/>
            </div>
            :null}
            <p className="user-tag tag">First name</p>
            <input type="text" className="username" onChange={(e)=>setFirstname(e.target.value)}/>
            <p className="user-tag tag">Last name</p>
            <input type="text" className="username" onChange={(e)=>setLastname(e.target.value)}/>
            <p className="user-tag tag">Email</p>
            <input type="email" className="username" onChange={(e)=>setEmail(e.target.value)}/>
            <p className="pass-tag tag">Password</p>
            <input type="password" className="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="signUp-btn" onClick={handleRegister}>
            Sign up
        </button>
    </div>
    </div>
</div>
)
}

export default SignUp
