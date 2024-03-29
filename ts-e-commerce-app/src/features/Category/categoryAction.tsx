import {createAsyncThunk} from '@reduxjs/toolkit'
import { getCategoryType } from './categoryType'
import getCategoryService from '../../services/Category/category.service'




export const getCategory = createAsyncThunk(getCategoryType, async (_, {rejectWithValue}) => {
    try{
    const response = await getCategoryService()
    console.log(response)
    const data = response.data
    console.log(data)
    return data
}catch(err){
    console.log(err)
    return rejectWithValue(err)
}
})

