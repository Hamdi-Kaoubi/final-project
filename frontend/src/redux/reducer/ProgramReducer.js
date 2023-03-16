import { GET_LANGUAGES } from "../actionTypes/ActionTypes";
const initialState = {
    programmings:[]
}
const ProgramReducer= (state = initialState, { type, payload }) => {
switch (type) {
    case GET_LANGUAGES:
        return {...state,programmings:payload.programming}
    default:
        return state
}   
}
export default ProgramReducer
