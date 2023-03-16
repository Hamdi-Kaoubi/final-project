import { GET_FASHION, GET_GRAPHIC, GET_HAND, GET_LANGUAGES, GET_SPORT, GET_VIDEO } from '../actionTypes/ActionTypes'
import axios from 'axios'
export const get_languages=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/getlanguage')
        dispatch({type:GET_LANGUAGES,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const get_hand=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/gethandmade')
        dispatch({type:GET_HAND,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const get_graphic=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/getgraphic')
        dispatch({type:GET_GRAPHIC,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const get_video=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/getvideo')
        dispatch({type:GET_VIDEO,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const get_sport=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/getsport')
        dispatch({type:GET_SPORT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}
export const get_fashion=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/getfashion')
        dispatch({type:GET_FASHION,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}