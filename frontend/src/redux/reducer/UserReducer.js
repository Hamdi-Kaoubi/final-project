import { REGISTER } from "../actionTypes/AuthTypes";

const initialState = {
    user:{}
}

const UserReducer = (state = initialState, { type, payload }) => {
switch (type) {
    case REGISTER:
        localStorage.setItem('token',payload.token)
        return {...state,user:payload.user}
    default:
        return state
} 
}
export default UserReducer