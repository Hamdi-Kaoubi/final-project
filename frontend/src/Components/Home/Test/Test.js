import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_oneLanguage } from '../../../redux/action/Action';
import { get_current } from '../../../redux/action/AuthAction';
import {FaRegThumbsUp} from 'react-icons/fa'
import {FaRegThumbsDown} from 'react-icons/fa'
import {FaRegHeart} from 'react-icons/fa'
import './Test.css'
const Test = () => {
  const [admin,setAdmin]=useState(false)
  const {id}=useParams()
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_oneLanguage(id))
    },[id,dispatch])
    const programming=useSelector((state)=>state.OneLanguageReducer.programming)
    console.log(id)
    useEffect(() => {
      dispatch(get_current())
    }, [dispatch])
    const user=useSelector((state)=>state.UserReducer.user)
    console.log(user)
    if(user.role==='admin'){
        setAdmin(true)
    }
  return (
    <div className='card-container'>
      {programming?.content?.map((el)=>
        <div className="card-content">
        <header>
          <img src={el.imgUrl} alt=''/>
          <h3 className='card-text1'>{el.vidTitle}</h3>
          <h2 className='card-text2'>{el.creator}</h2>
        </header>
        <div className="card-bio">
          <p className='card-text1'>{el.date}</p>
        <div className='card-btns'>
          <a  href={el.vidUrl}  target="_blank" rel='noreferrer'><button className="card-btn1">Watch Trick</button></a>
          <FaRegThumbsUp size='2.3rem' color='white'/>
          <FaRegThumbsDown size='2.3rem'/>
          <FaRegHeart size='2.3rem'/>
        </div>
        {admin?<button>delete</button>:null}
        </div>
      </div>
      )}
    </div>
  )
}

export default Test