import axios from 'axios'
import { GET_CURRENT, LOGIN, REGISTER } from '../actionTypes/AuthTypes'

export const register=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/register',data)
        dispatch({type:REGISTER,payload:res.data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const login=(data,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/login',data)
        dispatch({type:LOGIN,payload:res.data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const get_current=()=>async(dispatch)=>{
    const config={
        headers:{token:localStorage.getItem('token')}
    }
    try {
        const res=await axios.get('/current',config)
        dispatch({type:GET_CURRENT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}