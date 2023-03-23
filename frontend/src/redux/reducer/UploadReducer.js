import { GET_UPLOADS, POST_UPLOADS } from "../actionTypes/ActionTypes"

const initialState = {
    uploads:[]
}

const UploadsReducer= (state = initialState, { type, payload }) => {
switch (type) {

case GET_UPLOADS:
    return { ...state,uploads:payload.upload }
case POST_UPLOADS:
default:
    return state
}
}
export default UploadsReducer