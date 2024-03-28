import {createSlice} from '@reduxjs/toolkit'
import { loginUsers } from './authAction'


type initialStateProps = {
    isLoading: boolean
    content: []
    error: Object | null
}

const initialState : initialStateProps = {
    isLoading: false,
    error:  null,
    content: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            if(action.payload) {
                state.content = action.payload
            }
        })
        builder.addCase(loginUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})


export default loginSlice.reducer