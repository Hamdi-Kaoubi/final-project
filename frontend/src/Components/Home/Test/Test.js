import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_languages } from '../../../redux/action/Action'
import './Test.css'
const Test = () => {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_languages())
    }, [dispatch])
    const programmings=useSelector((state)=>state.ProgramReducer.programmings)
  return (
    <div>
    {programmings[0].content.map((elm)=>
        <div className="video-card">
    <header>
      <a href="#"><img src={elm.imgUrl} /></a>
      <h1>{elm.vidTitle}</h1>
      <h2>{elm.creator}</h2>
    </header>
    <div className="video-bio">
      <p>{elm.date}</p>
      <button>Wishlist</button>
      <button className="cart">Add to cart</button>
    </div>
  </div>
        
        )}
    </div>
  )
}

export default Test