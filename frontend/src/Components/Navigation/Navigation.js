import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
    <nav className="nav">
    <div className="nav-cont">
      <div className="logo">
        <a href="/home">T & T</a>
      </div>
      <div className="main_list">
        <ul className="navlinks">
          <li><a href="/home">Home</a></li>
          <li><a href="/home">Categories</a></li>
          <li><a href="/uploads">Users Uploads</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/profile"><FaRegUserCircle/></a></li>
          
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