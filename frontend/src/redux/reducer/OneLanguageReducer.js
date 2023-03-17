import { GET_ONELANGUAGE } from "../actionTypes/ActionTypes"

const initialState = {
    programming:{}
}

const OneLanguageReducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case GET_ONELANGUAGE:
    return {...state,programming:payload.programming }

  default:
    return state
  }
}
export default OneLanguageReducer