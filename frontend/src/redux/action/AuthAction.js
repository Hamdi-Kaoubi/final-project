import axios from 'axios'
import { REGISTER } from '../actionTypes/AuthTypes'

export const register=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/register',data)
        dispatch({type:REGISTER,payload:res.data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}