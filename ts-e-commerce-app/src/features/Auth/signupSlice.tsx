import {createSlice} from '@reduxjs/toolkit'
import { registerUsers } from './authAction'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

type initialStateProps = {
    isLoading: boolean
    content: {
        message: string;
        response: {
            email: string;
            name: string;
            role: string;
            uuid: string;
        }
      };
    error: Object | null
}

const initialState : initialStateProps = {
    isLoading: false,
    error:  null,
    content: {
        message: '',
        response: {
            email: '',
            name: '',
            role: '',
            uuid: '',
        }
      }
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