import { combineReducers } from "redux";
import ProgramReducer from "./ProgramReducer";
import HandReducer from "./HandReducer";
import GraphicReducer from "./GraphicReducer";
import VideoReducer from "./VideoReducer";
import SportReducer from "./SportReducer";
import FashionReducer from "./FashionReducer";
const rootreducer=combineReducers({
    ProgramReducer,
    HandReducer,
    GraphicReducer,
    VideoReducer,
    SportReducer,
    FashionReducer
})
export default rootreducer