import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Typewriter from 'typewriter-effect'
import Modal from './Modal'
import {useDispatch, useSelector} from 'react-redux'
import { get_uploads } from '../../redux/action/Action'
import './UsersUploads.css'
const UsersUploads = () => {
    const [openModal,setOpenModal]=useState(false)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_uploads())
    }, [dispatch])
    const uploads=useSelector((state)=>state.UploadReducer.uploads)
  return (
    <div>
        <div className='uploads'>
            <Typewriter
            onInit={(typewriter)=>{
                typewriter
                .typeString('you can submit your tips videos here..come on and give it a shot')
                .start()
            }}
            />
            <button onClick={()=>setOpenModal(true)}>Upload</button>
        </div>
        {openModal && <Modal closeModal={setOpenModal}/>}
        <div className='uploads-container'>
        {uploads.map((el)=>
          <Card style={{ width: '18rem', boxShadow:'0 10px 20px rgb(40, 40, 40)',cursor:'pointer'}}>
      <Card.Img variant="top" src={el.thumbNailImage} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.domain}
        </Card.Text>
      </Card.Body>
    </Card>
          )}
        </div>
    </div>
  )
}

export default UsersUploads