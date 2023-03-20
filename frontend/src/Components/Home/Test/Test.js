import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
          <Link to='/video'><button>Watch Trick</button></Link>
          <button className="card-btn">Add to favourites</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Test