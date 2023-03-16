import { GET_SPORT } from "../actionTypes/ActionTypes"
const initialState = {
    sports:[]
}
const SportReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_SPORT:
    return { ...state,sports:payload.sport}
  default:
    return state
  }
}
export default SportReducer