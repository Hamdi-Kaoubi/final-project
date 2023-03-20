import { GET_CURRENT, LOGIN, REGISTER } from "../actionTypes/AuthTypes";

const initialState = {
    user:{}
}

const UserReducer = (state = initialState, { type, payload }) => {
switch (type) {
    case REGISTER:
    case LOGIN:
        localStorage.setItem('token',payload.token)
        return {...state,user:payload.user}
    case GET_CURRENT:
        return {...state,user:payload}
    default:
        return state
} 
}
export default UserReducer