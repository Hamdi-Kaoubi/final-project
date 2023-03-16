import { GET_HAND } from "../actionTypes/ActionTypes"

const initialState = {
    handmades:[]
}

const HandReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_HAND:
            return {...state,handmades:payload.handMade}
        default:
            return state
    }
        
    }
export default HandReducer