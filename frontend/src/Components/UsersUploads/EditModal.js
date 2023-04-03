import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { get_uploads } from '../../redux/action/Action'
import './EditModal.css'
const EditModal = ({closeEdit, id}) => {
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
    const handleUpdate=(id,data)=>{
        axios.put(`/editupload/${id}`,data)
        .then((res)=>console.log(res.data))
        .then(dispatch(get_uploads()))
    }
  return (
    <div className='editBackground'>
        <div className='editContainer'>
            <div className='closeBtn'>
                <button onClick={()=>closeEdit(false)}>X</button>
            </div>
            <div className='modalTitle'>
                <h2>Make your changes</h2>
            </div>
            <div className='modalBody'>
                <input type='text' placeholder='put your title here' onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder='the domain of your video' onChange={(e)=>setDomain(e.target.value)}/>
                <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                <button className='add' onClick={addImage}>add image</button>
                <input type='file' onChange={(e)=>setVideo(e.target.files[0])}/>
                <button className='add' onClick={addVideo}>add video</button>
            </div>
            <div className='modalFooter'>
                <button onClick={()=>handleUpdate(id,{
                    title:title,
                    domain:domain,
                    thumbNailImage:img,
                    video:vid
                })}>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default EditModal
