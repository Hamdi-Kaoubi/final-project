import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { get_current, logout } from '../../redux/action/AuthAction'
import AlertError from './AlertError'

import './Profile.css'
const Profile = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get_current())
  }, [dispatch])
  const navigate=useNavigate()
  const user=useSelector((state)=>state.UserReducer.user)
  return (
    <div className='profile-container'>
    <AlertError/>
      <h1>Get a tip, make a trick...</h1>
      {user.firstname}
      <button onClick={()=>dispatch(logout(),navigate('/'))}>Logout</button>
      </div>
  )
}

export default Profile