import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { delete_user, get_current, get_users, logout } from '../../redux/action/AuthAction'
import AlertError from './AlertError'

import './Profile.css'
const Profile = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(get_current())
    dispatch(get_users())
  }, [dispatch])
  const navigate=useNavigate()
  const user=useSelector((state)=>state.UserReducer.user)
  const users=useSelector((state)=>state.UserReducer.users)
  return (
    <div className='profile-container'>
    <AlertError/>
      <h1>Get a tip, make a trick...</h1>
      {user.role==="user"?
      <div className='username'>
        {user.firstname}
        <span>    </span>
        {user.lastname}
      </div>
    :null}
    {user.role==="admin"?
    <div className='users'>
      {users?.map((el)=>el.role==="user"?
        <div className='list-users'>
          {el.email}
          <button className='del-btn' onClick={()=>dispatch(delete_user(el._id))}>delete</button>
        </div>
      :null)}
      </div>
  :null}
      <button onClick={()=>dispatch(logout(),navigate('/'))}>Logout</button>
      </div>
  )
}

export default Profile