import {createAsyncThunk} from '@reduxjs/toolkit'
import { updateUserType } from './userType'


export const updateUser = createAsyncThunk(updateUserType, async (_, {rejectWithValue}) => {
    try{
        // const response = await getProductService(inputs)
        // console.log(response)
        // const data = await response.data
        // console.log(data)
        // return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})
