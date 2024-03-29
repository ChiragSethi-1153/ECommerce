import { combineReducers } from "@reduxjs/toolkit"
import signupSlice from "../features/Auth/signupSlice"
import loginSlice from "../features/Auth/loginSlice"
import categorySlice from "../features/Category/categorySlice"


const rootReducer = combineReducers({
    signup: signupSlice,
    login: loginSlice,
    category: categorySlice,
}
)
export default rootReducer

