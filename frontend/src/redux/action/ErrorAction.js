import { ALERT_ERROR, CLEAR_ERROR } from "../actionTypes/ErrorTypes"

export const alert_error=(msg)=>async(dispatch)=>{
    const id=Math.random()
    dispatch({type:ALERT_ERROR,paylod:{msg,id}})
    setTimeout(()=>{
        dispatch({type:CLEAR_ERROR,paylod:id})
    },3000)
}