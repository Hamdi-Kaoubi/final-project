import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { get_uploads } from '../../redux/action/Action'
import './Modal.css'
const Modal = ({closeModal}) => {
    const dispatch=useDispatch()
    const [title, setTitle]=useState('')
    const [domain, setDomain]=useState('')
    const [image,setImage]=useState([])
    const [video, setVideo]=useState([])
    const[img,setImg]=useState('')
    const [vid,setVid]=useState('')
    const addImage=async()=>{
        const formData=new FormData()
        formData.append('file',image)
        formData.append('upload_preset','hamdi_kb')
        await axios.post('http://api.cloudinary.com/v1_1/djcqzobzn/upload',formData)
        .then((res)=>setImg(res.data.url))
    }
    const addVideo=async()=>{
        const formData=new FormData()
        formData.append('file',video)
        formData.append('upload_preset','hamdi_kb')
        await axios.post('http://api.cloudinary.com/v1_1/djcqzobzn/upload',formData)
        .then((res)=>setVid(res.data.url))
    }
    const handlePost=(res)=>{
        axios.post('/addupload',{
            title:title,
            domain:domain,
            thumbNailImage:img,
            video:vid
        })
        .then((res)=>console.log(res.data))
        .then(dispatch(get_uploads()))
    }
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
                <input type='text' placeholder='put your title here' onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder='the domain of your video' onChange={(e)=>setDomain(e.target.value)}/>
                <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                <button onClick={addImage}>add image</button>
                <input type='file' onChange={(e)=>setVideo(e.target.files[0])}/>
                <button onClick={addVideo}>add video</button>
            </div>
            <div className='modalFooter'>
                <button onClick={handlePost}>Upload</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
