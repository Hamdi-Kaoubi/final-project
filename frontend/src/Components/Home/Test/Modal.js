import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_oneLanguage } from '../../../redux/action/Action'

const Modal = () => {
    const {id}=useParams()
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_oneLanguage(id))
    }, [id,dispatch])
    const programming=useSelector((state)=>state.OneLanguageReducer.programming)
    console.log(id)
    const video=programming.content
  return (
    <div className='overlay'>
        <div className='modal-container'>
            <iframe width="560" height="315" src={video.map((el)=>el.vidUrl)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default Modal