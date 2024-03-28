import {createSlice} from '@reduxjs/toolkit'
import { registerUsers } from './authAction'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

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


export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(registerUsers.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
        })
    }
})

export default signupSlice.reducer