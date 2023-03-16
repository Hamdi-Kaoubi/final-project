import React from 'react'
import './SignUp.css'
const SignUp = () => {
  return (
    <div className="parent">
    <div className="login-modal">
      <div className="title">Tips and Tricks</div>
      <div className="contain">
        <div className="sign-parent">
        <div className="sign-in"><a><span className="active">Sign up</span></a></div>
        </div>
        <div className="forms">
            <p className="user-tag tag">First name</p>
            <input type="text" className="username" />
            <p className="user-tag tag">Last name</p>
            <input type="text" className="username" />
            <p className="user-tag tag">Email</p>
            <input type="email" className="username" />
            <p className="pass-tag tag">Password</p>
            <input type="password" className="password" />
        </div>
        <button className="login-btn">
            Sign up
        </button>
    </div>
    </div>
</div>
)
}

export default SignUp
