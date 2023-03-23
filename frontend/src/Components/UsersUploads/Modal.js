import React from 'react'
import './Modal.css'
const Modal = ({closeModal}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='closeBtn'>
                <button onClick={()=>closeModal(false)}>X</button>
            </div>
            <div className='modalTitle'>
                <h2>Surprise us</h2>
            </div>
            <div className='modalBody'>
                <input type='text' placeholder='put your title here'/>
                <input type='text' placeholder='the domain of your video'/>
            </div>
            <div className='modalFooter'>
                <button>Upload</button>
            </div>
        </div>
    </div>
  )
}

export default Modal