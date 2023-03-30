import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_oneLanguage } from '../../../redux/action/Action';
import { get_current } from '../../../redux/action/AuthAction';
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import {FcLike} from 'react-icons/fc'
import {FcStart} from 'react-icons/fc'
import {FcEmptyTrash} from 'react-icons/fc'
import {FcEditImage} from 'react-icons/fc'
import { useAppContext } from '../../appContext/appContext';
import './Test.css'

const Test = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_current())
      dispatch(get_oneLanguage(id))
    }, [id,dispatch])
    const programming=useSelector((state)=>state.OneLanguageReducer.programming)
    console.log(id)
    const user=useSelector((state)=>state.UserReducer.user)
    console.log(user)
    const {favorites,addToFavorites}=useAppContext()
    console.log('favorites: ',favorites)
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
          {user.role==='user'?
          <div className='card-btns'>
          <a  href={el.vidUrl}  target="_blank" rel='noreferrer'><FcStart size='2.3rem'/></a>
          <FiThumbsUp size='2.3rem' color='white'/>
          <FiThumbsDown size='2.3rem'/>
          <FcLike size='2.3rem' onClick={()=>addToFavorites(el)}/>
        </div>
        :null}
        {user.role==="admin"?
        <div style={{display:'flex', justifyContent:'center',gap:'30px'}}>
        <FcEmptyTrash size='2.4rem' cursor='pointer'/>
        <FcEditImage size='2.4rem' cursor='pointer'/>
        </div>
        :null}
        </div>
      </div>
      )}
    </div>
  )
}

export default Test