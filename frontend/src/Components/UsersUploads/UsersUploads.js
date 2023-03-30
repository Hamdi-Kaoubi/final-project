import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Typewriter from 'typewriter-effect'
import Modal from './Modal'
import {useDispatch, useSelector} from 'react-redux'
import { delete_upload, get_uploads } from '../../redux/action/Action'
import { get_current } from '../../redux/action/AuthAction';
import {FcEmptyTrash} from 'react-icons/fc'
import './UsersUploads.css'

const UsersUploads = () => {
    const [openModal,setOpenModal]=useState(false)
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(get_uploads())
      dispatch(get_current())
    }, [dispatch])
    const user=useSelector((state)=>state.UserReducer.user)
    const uploads=useSelector((state)=>state.UploadReducer.uploads)
    
  return (
    <div className='userUploads'>
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
          <a  href={el.video}  target="_blank" rel='noreferrer'><Card.Img variant="top" src={el.thumbNailImage} /></a>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.domain}
        </Card.Text>
        {user.role==="admin"?
        <FcEmptyTrash size='2.4rem' cursor='pointer' onClick={()=>dispatch(delete_upload(el._id))}/>
        :null}
      </Card.Body>
    </Card>
          )}
        </div>
    </div>
  )
}

export default UsersUploads