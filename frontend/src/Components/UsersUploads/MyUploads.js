import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { my_uploads } from '../../redux/action/Action'
import { get_current } from '../../redux/action/AuthAction'
import {FcEditImage} from 'react-icons/fc'
const MyUploads = () => {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(my_uploads())
        dispatch(get_current())
    }, [dispatch])
    const myuploads=useSelector((state)=>state.myuploads)
    const user=useSelector((state)=>state.UserReducer.user)
  return (
    <div>
    {myuploads.map((el)=>
        <Card style={{ width: '18rem', boxShadow:'0 10px 20px rgb(40, 40, 40)',cursor:'pointer'}}>
        <a  href={el.video}  target="_blank" rel='noreferrer'><Card.Img variant="top" src={el.thumbNailImage} /></a>
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.domain}
      </Card.Text>
      {user.role==="user"?
      <FcEditImage  size='2.4rem' cursor='pointer'/>
      :null}
    </Card.Body>
  </Card>
        )}
    </div>
  )
}

export default MyUploads