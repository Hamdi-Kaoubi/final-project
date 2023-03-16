import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { get_languages } from '../../../redux/action/Action'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '.././Home.css'
import { Link } from 'react-router-dom';
const Languages = () => {
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_languages())
    }, [dispatch])
    const programmings=useSelector((state)=>state.ProgramReducer.programmings)
  return (
    <div className='swiper-container'>
      <div className='title'>
        <h3>Programming Languages</h3>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        modules={[ EffectCoverflow,Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {programmings.map((el)=>
        <SwiperSlide key={el._id}>
          <div className='slider-container'>
            
            <img src={el.image} alt='#'/>
            <div className='text-container'>
            <Link to='/videos'><h2 className='text'>{el.title}</h2></Link>
              
            </div>
          </div>
        </SwiperSlide>
      )}
      </Swiper>
    </div>
  )
}

export default Languages