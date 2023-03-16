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
    <div>
    <h1>
      <Languages/>
      <HandMades/>
      <Graphic/>
      <VideoEdit/>
      <Sport/>
      <Fashion/>
    </h1>
    </div>
  )
}

export default Home