import React from 'react'
import AlertError from './AlertError'

import './Profile.css'
const Profile = () => {
  return (
    <div className='profile-container'>
    <AlertError/>
      <h1>Get a tip, make a trick...</h1>
      <button>Logout</button>
      </div>
  )
}

export default Profile