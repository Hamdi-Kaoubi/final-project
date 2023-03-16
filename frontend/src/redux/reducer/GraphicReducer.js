import { GET_GRAPHIC } from "../actionTypes/ActionTypes"

const initialState = {
    graphicdesigns:[]
}

const GraphicReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_GRAPHIC:
    return { ...state,graphicdesigns:payload.graphic}

  default:
    return state
  }
}
export default GraphicReducer