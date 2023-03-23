import { ALERT_ERROR, CLEAR_ERROR } from "../actionTypes/ErrorTypes"

const initialState = []

const ErrorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALERT_ERROR:
                return [...state,payload]
        case CLEAR_ERROR:
                return state.filter((el)=>el.id!==payload)
        default:
            return state
    }
}
export default ErrorReducer