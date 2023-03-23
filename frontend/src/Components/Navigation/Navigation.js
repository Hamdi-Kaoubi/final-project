import React from 'react'
import './Navigation.css'
const Navigation = () => {
  return (
    <div className='navigation'>
    <nav className="nav">
    <div className="container">
      <div className="logo">
        <a href="/home">T & T</a>
      </div>
      <div id="mainListDiv" className="main_list">
        <ul className="navlinks">
          <li><a href="/home">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="/uploads">Users Uploads</a></li>
          <li><a href="#">Favourites</a></li>
          <li><a href="/profile"><i class="fa-duotone fa-user"></i></a></li>
          
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