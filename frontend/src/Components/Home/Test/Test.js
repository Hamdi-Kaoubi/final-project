import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
//import './Test.css'
const Test = () => {
  const [data,setData]=useState([])
  const [loaded,setLoaded] = useState(true)
  useEffect(() => {
    axios.get('/getlanguage').then((res)=>setData(res.data))
    .then(()=>setLoaded(false))
  }, [])
  return (
    <div className='videos-container'>
      {loaded==true?<div><Spinner className='spn' animation="border" role="status">
      </Spinner></div>:data.map((el)=>el.content.map((elm)=>
        <div className="video-card">
        <header>
          <img src={elm.imgUrl} alt=''/>
          <h1>{elm.vidTitle}</h1>
          <h2>{elm.creator}</h2>
        </header>
        <div className="video-bio">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula vitae lorem tempus maximus.</p>
          <button>Wishlist</button>
          <button className="cart">Add to cart</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Test