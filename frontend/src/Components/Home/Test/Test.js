import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_oneLanguage } from '../../../redux/action/Action';
import './Test.css'
const Test = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_oneLanguage(id))
    }, [id,dispatch])
    const programming=useSelector((state)=>state.OneLanguageReducer.programming)
    console.log(id)
  return (
    <div className='card-container'>
      {programming?.content?.map((el)=>
        <div className="card-content">
        <header>
          <img src={el.imgUrl} alt=''/>
          <h1 className='card-text1'>{el.vidTitle}</h1>
          <h2 className='card-text2'>{el.creator}</h2>
        </header>
        <div className="card-bio">
          <p style={{color:'black'}}>{el.date}</p>
         <a  href={el.vidUrl}  target="_blank" rel='noreferrer'><button>Watch Trick</button></a>
          <button className="card-btn">Add to favourites</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Test