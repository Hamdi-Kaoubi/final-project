import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  return (
    <div className='navigation'>
    <nav className="nav">
    <div className="container">
      <div className="logo">
        <a href="/">T & T</a>
      </div>
      <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
          <li><a href="/">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Users Uploads</a></li>
          <li><a href="#">Favourites</a></li>
          <li><Link to='/login'>Login</Link></li>
          
        </ul>
      </div>
      <span className="navTrigger">
        <i />
        <i />
        <i />
      </span>
    </div>
  </nav>
  </div>
  )
}

export default Navigation