import React, { useState } from 'react'
import './UsersUploads.css'
import Typewriter from 'typewriter-effect'
import Modal from './Modal'
const UsersUploads = () => {
    const [openModal,setOpenModal]=useState(false)
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
    </div>
  )
}

export default UsersUploads