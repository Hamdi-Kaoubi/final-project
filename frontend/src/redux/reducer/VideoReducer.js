import { GET_VIDEO } from "../actionTypes/ActionTypes"

const initialState = {
    videoedits:[]
}

const VideoReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_VIDEO:
    return { ...state,videoedits:payload.video}

  default:
    return state
  }
}
export default VideoReducer
