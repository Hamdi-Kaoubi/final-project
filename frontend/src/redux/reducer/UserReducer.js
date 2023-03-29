import { 
    DELETE_USER, 
    GET_CURRENT, 
    GET_USERS, 
    LOGIN, 
    LOGOUT, 
    REGISTER 
} from "../actionTypes/AuthTypes";

const initialState = {
    users:[],
    user:{}
}

const UserReducer = (state = initialState, { type, payload }) => {
switch (type) {
    case REGISTER:
    case LOGIN:
        localStorage.setItem('token',payload.token)
        return {...state,user:payload.user}
    case GET_CURRENT:
        return {...state,user:payload.user}
    case LOGOUT:
        localStorage.removeItem('token')
        return {...state,user:null}
    case GET_USERS:
        return {...state,users:payload.user}
    case DELETE_USER:
        return {...state,users:state.users.filter((el)=>el._id!==payload)}
    default:
        return state
} 
}
export default UserReducer