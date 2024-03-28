import { combineReducers } from "@reduxjs/toolkit"
import signupSlice from "../features/Auth/signupSlice"
import loginSlice from "../features/Auth/loginSlice"


const rootReducer = combineReducers({
    signup: signupSlice,
    login: loginSlice
}
)
export default rootReducer

