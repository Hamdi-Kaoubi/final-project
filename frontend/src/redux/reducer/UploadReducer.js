import { GET_UPLOADS, POST_UPLOADS } from "../actionTypes/ActionTypes"

const initialState = {
    uploads:[]
}

const UploadReducer= (state = initialState, { type, payload }) => {
switch (type) {

case GET_UPLOADS:
    return { ...state,uploads:payload.upload }
case POST_UPLOADS:
    return {...state,uploads:payload.upload}
default:
    return state
}
}
export default UploadReducer