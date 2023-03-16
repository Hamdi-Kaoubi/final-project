import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="parent">
    <div className="login-modal">
      <div className="title">Tips and Tricks</div>
      <div className="containers">
        <div className="sign-parent">
          <div className="sign-in"><a><span className="active">Login</span></a></div>
          <div className="sign-up"><a href='/login/signup'><span className="not-active">Sign Up</span></a></div>
        </div>
        {/*sign-parent*/}
        <div className="forms">
          <p className="user-tag tag">Email</p>
          <input type="email" className="username" />
          <p className="pass-tag tag">Password</p>
          <input type="password" className="password" />
        </div>
        <button className="login-btn">
          Login
        </button>
        <div className="forgot-section">
          <a href="#" className="forgot-link">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login