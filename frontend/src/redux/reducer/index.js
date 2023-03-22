import { combineReducers } from "redux";
import ProgramReducer from "./ProgramReducer";
import OneLanguageReducer from "./OneLanguageReducer";
import HandReducer from "./HandReducer";
import GraphicReducer from "./GraphicReducer";
import VideoReducer from "./VideoReducer";
import SportReducer from "./SportReducer";
import FashionReducer from "./FashionReducer";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";
const rootreducer=combineReducers({
    ProgramReducer,
    OneLanguageReducer,
    HandReducer,
    GraphicReducer,
    VideoReducer,
    SportReducer,
    FashionReducer,
    UserReducer,
    ErrorReducer
})
export default rootreducer