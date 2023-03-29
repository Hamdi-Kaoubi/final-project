import { DELETE_UPLOAD, GET_UPLOADS, MY_UPLOADS, POST_UPLOADS } from "../actionTypes/ActionTypes"

const initialState = {
    uploads:[]
}

const UploadReducer= (state = initialState, { type, payload }) => {
switch (type) {

case GET_UPLOADS:
    return { ...state,uploads:payload.upload }
case POST_UPLOADS:
    return {...state,uploads:payload.upload}
case DELETE_UPLOAD:
    return {...state,uploads:state.uploads.filter((el)=>el._id!==payload)}
case MY_UPLOADS:
    return {...state,uploads:payload}
default:
    return state
}
}
export default UploadReducer