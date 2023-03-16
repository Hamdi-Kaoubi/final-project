import { GET_FASHION } from "../actionTypes/ActionTypes"
const initialState = {
    fashions:[]
}
const FashionReducer= (state = initialState, { type, payload }) => {
switch (type) {
    case GET_FASHION:
        return {...state,fashions:payload.fashion}
    default:
    return state
}
}
export default FashionReducer