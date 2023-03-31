import React from 'react'
import Graphic from './Graphic/Graphic'
import HandMades from './HandMades/HandMades'
import Languages from './Languages/Languages'
import VideoEdit from './VideoEdit/VideoEdit'
import './Home.css'
import Sport from './Sport/Sport'
import Fashion from './Fashion/Fashion'
const Home = () => {
  return (
    <div className='HomePage'>
      <Languages/>
      <br/>
      <HandMades/>
      <br/>
      <Graphic/>
      <br/>
      <VideoEdit/>
      <br/>
      <Sport/>
      <br/>
      <Fashion/>
    </div>
  )
}

export default Home