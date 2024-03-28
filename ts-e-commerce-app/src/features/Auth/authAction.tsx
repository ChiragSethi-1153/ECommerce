import {createAsyncThunk} from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import loginService from '../../services/Auth/loginService'
import signupService from '../../services/Auth/signupService'

export type Users = {
    role: String
    name: String
    email: String
    password: String
}

export type logging = {
    email: String,
    password: String
}

export const registerUsers = createAsyncThunk(signupType, async (inputs: Users, {rejectWithValue}) => {
    try{
    console.log(inputs)
    const response = await signupService(inputs)
    console.log(response)
    const data = response.data
    console.log(data)
    return data
}catch(err){
    console.log(err)
    return rejectWithValue(err)
}
})


export const loginUsers = createAsyncThunk(loginType, async (inputs: logging, {rejectWithValue}) => {
    try{
        const response = await loginService(inputs)
        console.log(response)
        const data = await response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})